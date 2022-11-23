import { FlatList, View } from 'react-native';
import { Category, Container, Icon } from './categories.styles';
import { Text } from '../Text';
import { useState } from 'react';

const categories = [
  {
    id: '637d5b5744177eff3fcf7a57',
    name: 'Cakes',
    icon: '🍰',
  },
  {
    id: '637d5b8944177eff3fcf7a59',
    name: 'Drinks',
    icon: '🍷',
  },
  {
    id: 'sdsds',
    name: 'Drinks',
    icon: '🍷',
  },
  {
    id: 'wafasfafwa',
    name: 'Drinks',
    icon: '🍷',
  },
  {
    id: '637d5b8944177effsafwasfa3fcf7a59',
    name: 'Drinks',
    icon: '🍷',
  },
  {
    id: '637d5b8944177esdsdaff3fcf7a59',
    name: 'Drinks',
    icon: '🍷',
  },
  {
    id: '637d5b8944177efffff3fcf7a59',
    name: 'Drinks',
    icon: '🍷',
  },
  {
    id: '637d5b8944177effwfw3fcf7a59',
    name: 'Drinks',
    icon: '🍷',
  },
  {
    id: '637d5b8944177eff3fwrwcf7a59',
    name: 'Drinks',
    icon: '🍷',
  },
  {
    id: '637d5b8944177eff3fcssssf7a59',
    name: 'Drinks',
    icon: '🍷',
  },
];

interface Category {
  id: string;
  name: string;
  icon: string;
}
export const Categories = () => {
  // const { data: categoryList } = useQuery({
  //   queryKey: ['categories'],
  //   queryFn: async () => {
  //     const categoryList = await fetch('http://localhost:3001/categories').then(
  //       (res) => res.json().then((res: Category[]) => res)
  //     );

  //     console.log('categoryList', categoryList);
  //     return categoryList;
  //   },
  //   refetchOnWindowFocus: false,
  // });

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
        data={categories}
        keyExtractor={(category) => category.id}
        renderItem={({ item: category }) => {
          const isSelected = selectedCategory === category.id;
          return (
            <Category onPress={() => handleSelectCategory(category.id)}>
              <Icon>
                <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
              </Icon>
              <Text size={14} weight={'500'} opacity={isSelected ? 1 : 0.5}>
                {category.name}
              </Text>
            </Category>
          );
        }}
      />
    </Container>
  );
};
