import { FlatList, TouchableOpacity, View } from 'react-native';
import { CartItem as CartItemType, Product } from '@/types';
import { API_URL } from '@env';
import { Actions, Image, Item, ProductContainer } from './cart.styles';
import { Text } from '@/components/typography';
import { formatCurrency } from '@/utils/formatCurrency';
import { SvgXml } from 'react-native-svg';
import { add, minus } from '@/assets/icons';
import { OrderConfirmedModal } from '@/components/overlay';
import { useState } from 'react';
import { Button } from '@/components/form';

interface CartProps {
  cartItems: CartItemType[] | undefined;
  onAdd(product: Product): void;
  onDecrement(product: Product): void;
  onOrderConfirm(): void;
}
export const Cart = ({
  cartItems,
  onAdd,
  onDecrement,
  onOrderConfirm,
}: CartProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const totalPrice = cartItems?.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  return (
    <>
      <OrderConfirmedModal
        onOk={() => {
          setIsModalVisible(false);
          onOrderConfirm();
        }}
        visible={isModalVisible}
      />

      {cartItems && cartItems.length > 0 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartItems}
          keyExtractor={({ product }) => product.id}
          style={{
            maxHeight: 216,
            borderTopWidth: 1,
            borderTopColor: '#d73035',
          }}
          renderItem={({ item: { product, quantity } }) => (
            <Item>
              <ProductContainer>
                <Image
                  source={{
                    uri: `${API_URL}/uploads/${product.imagePath}`,
                    headers: {
                      'Content-type': 'application/json',
                    },
                    method: 'GET',
                  }}
                />
                <Text color="#666" style={{ lineHeight: 18, marginRight: 8 }}>
                  {quantity}x
                </Text>

                <View>
                  <Text
                    numberOfLines={1}
                    style={{ lineHeight: 18 }}
                    weight="500"
                  >
                    {product.name}
                  </Text>
                  <Text>{formatCurrency(product.price)}</Text>
                </View>
              </ProductContainer>

              <Actions>
                <TouchableOpacity onPress={() => onDecrement(product)}>
                  <SvgXml xml={minus} />
                </TouchableOpacity>

                <TouchableOpacity>
                  <SvgXml xml={add} onPress={() => onAdd(product)} />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          {cartItems && cartItems.length > 0 ? (
            <>
              <Text>Total</Text>
              <Text size={18} weight={'700'}>
                {formatCurrency(totalPrice ?? 0)}
              </Text>
            </>
          ) : (
            <Text color="#666" size={14}>
              Carrinho vazio
            </Text>
          )}
        </View>

        <Button
          disabled={cartItems && cartItems.length > 0 ? false : true}
          onPress={() => {
            setIsModalVisible(true);
          }}
        >
          Confirmar pedido
        </Button>
      </View>
    </>
  );
};
