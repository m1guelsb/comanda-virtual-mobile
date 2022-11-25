import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { Text } from '@/components/typography';
import { api } from '@/services/axios';
import { Category as CategoryItem, Container, Icon } from './categories.styles';
import type { Category } from '@/types';

export const Categories = () => {
  const { data: categoryList } = useQuery({
    queryKey: ['categories'],
    queryFn: async () =>
      await api.get<Category[]>('/categories').then((res) => res.data),
    refetchOnWindowFocus: false,
  });

  const [selectedCategory, setSelectedCategory] = useState('');

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
              <Icon>
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
