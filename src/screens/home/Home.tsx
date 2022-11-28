import { useState } from 'react';
import { useAtom } from 'jotai';
import { Container } from './home.styles';
import { Header, Footer } from '@/components/layout';
import { Categories, Menu } from '@/components/data-display';
import { TableModal } from '@/components/overlay';
import { Button } from '@/components/form';
import { Cart } from '@/components/data-display';
import type { CartItem, Product } from '@/types';
import { useCreateOrder } from '@/hooks/api';
import { isConfirmationModalVisible } from '@/store/orders';
import { useIsFetching } from '@tanstack/react-query';

export const Home = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [, setIsConfirmOrderModalVisible] = useAtom(isConfirmationModalVisible);
  const isProductListFetching = useIsFetching({ queryKey: ['products'] });

  const handleAddToCart = (product: Product) => {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product.id === product.id
      );
      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];
      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  };

  const handleDecrementCartItem = (product: Product) => {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product.id === product.id
      );

      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  };

  const handleResetOrder = () => {
    setSelectedTable('');
    setCartItems([]);
  };

  const { createOrder, isLoading } = useCreateOrder();

  const handleCreateOrder = (cartItems: CartItem[]) => {
    createOrder(
      {
        table: selectedTable,
        products: cartItems.map((item) => {
          return {
            quantity: item.quantity,
            product: item.product.id,
          };
        }),
      },
      {
        onSuccess() {
          setIsConfirmOrderModalVisible(true);
        },
      }
    );
  };

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          cancelOrder={() => handleResetOrder()}
        />

        <Categories />

        <Menu onAddToCart={(product) => handleAddToCart(product)} />

        <Footer>
          {!selectedTable ? (
            <Button
              disabled={!!isProductListFetching}
              onPress={() => setIsTableModalVisible(true)}
            >
              Novo Pedido
            </Button>
          ) : (
            <Cart
              onAdd={(product) => handleAddToCart(product)}
              onDecrement={(product) => handleDecrementCartItem(product)}
              cartItems={cartItems}
              orderProps={{
                createOrder: () => handleCreateOrder(cartItems),
                isLoading,
              }}
              resetOrder={handleResetOrder}
            />
          )}
        </Footer>
      </Container>

      <TableModal
        setSelectedTable={(table) => setSelectedTable(table)}
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
      />
    </>
  );
};
