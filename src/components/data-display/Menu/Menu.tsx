import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { API_URL } from '@env';
import { Text } from '@/components/typography';
import { formatCurrency } from '@/utils/formatCurrency';
import type { Product } from '@/types';
import {
  Container,
  Product as ProductItem,
  Image,
  Details,
} from './menu.styles';
import { add } from '@/assets/icons';
import { useListProducts } from '@/hooks/api';
import { useIsFetching } from '@tanstack/react-query';

interface MenuProps {
  onAddToCart(product: Product): void;
}
export const Menu = ({ onAddToCart }: MenuProps) => {
  const { productList } = useListProducts();
  const isProductListFetching = useIsFetching({ queryKey: ['products'] });

  return (
    <>
      {isProductListFetching ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator size={96} />
        </View>
      ) : (
        <Container>
          <FlatList
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 16,
                }}
              />
            )}
            data={productList}
            contentContainerStyle={{ paddingVertical: 8 }}
            keyExtractor={(product) => product.id}
            renderItem={({ item: product }) => {
              return (
                <ProductItem>
                  <Image
                    source={{
                      uri: `${API_URL}/uploads/${product.imagePath}`,
                      headers: {
                        'Content-type': 'application/json',
                      },
                      method: 'GET',
                    }}
                  />

                  <Details>
                    <Text weight="700" numberOfLines={1}>
                      {product.name}
                    </Text>
                    <Text
                      numberOfLines={2}
                      style={{ lineHeight: 15 }}
                      size={14}
                      color="#666"
                    >
                      {product.description}
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Text
                        size={14}
                        style={{ display: 'flex', alignItems: 'center' }}
                        weight="700"
                      >
                        {formatCurrency(product.price)}
                      </Text>
                    </View>
                  </Details>
                  <TouchableOpacity onPress={() => onAddToCart(product)}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <SvgXml xml={add} />
                    </View>
                  </TouchableOpacity>
                </ProductItem>
              );
            }}
          />
        </Container>
      )}
    </>
  );
};
