import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Text } from '@/components/typography';
import { Category as CategoryItem, Container, Icon } from './categories.styles';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useListCategories, useListProducts } from '@/hooks/api';

export const Categories = () => {
  const { categoryList } = useListCategories();

  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();

  const queryClient = useQueryClient();

  const { refetch: refetchProductList } = useListProducts({
    filterParams: {
      categoryId: selectedCategory,
    },
    queryConfigs: {
      onSuccess(data) {
        queryClient.setQueriesData(['products'], data);
      },
    },
  });

  useEffect(() => {
    refetchProductList();
  }, [selectedCategory]);

  const handleSelectCategory = (categoryId: string) => {
    const category = selectedCategory === categoryId ? '' : categoryId;
    setSelectedCategory(category);
  };

  return (
    <Container>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 24 }} />}
        contentContainerStyle={{ padding: 8 }}
        data={categoryList}
        keyExtractor={(category) => category.id}
        renderItem={({ item: category }) => {
          const isSelected = selectedCategory === category.id;
          return (
            <CategoryItem onPress={() => handleSelectCategory(category.id)}>
              <Icon style={{ borderColor: isSelected ? '#d73035' : '#cfcfcf' }}>
                <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
              </Icon>
              <Text size={14} weight={'500'} opacity={isSelected ? 1 : 0.5}>
                {category.name}
              </Text>
            </CategoryItem>
          );
        }}
      />
    </Container>
  );
};
