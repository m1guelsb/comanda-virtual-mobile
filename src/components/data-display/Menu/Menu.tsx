import { FlatList, TouchableOpacity, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '@env';
import { api } from '@/services/axios';
import { Text } from '@/components/typography';
import { formatCurrency } from '@/utils/formatCurrency';
import type { Product } from '@/types';
import {
  Container,
  Product as ProductItem,
  Image,
  Details,
} from './menu.styles';
import { SvgXml } from 'react-native-svg';
import { add } from '@/assets/icons';

export const Menu = () => {
  const { data: productList } = useQuery({
    queryKey: ['products'],
    queryFn: async () =>
      await api.get<Product[]>('/products').then((res) => res.data),
    refetchOnWindowFocus: false,
  });

  return (
    <>
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
                    <TouchableOpacity>
                      <SvgXml xml={add} />
                    </TouchableOpacity>
                  </View>
                </Details>
              </ProductItem>
            );
          }}
        />
      </Container>
    </>
  );
};
