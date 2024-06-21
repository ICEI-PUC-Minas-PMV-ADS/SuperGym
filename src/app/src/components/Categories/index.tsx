import React, { useState } from 'react';

import { FlatList } from 'react-native';

//import { categories } from '../../mocks/categories';

import { Text } from '../Text';

import { CategoryContainer, Icon } from './styles';
import { Category } from '../../types/Category';

interface CategoriesProps {
  categories: Category[]
  onSelectCategory: (categoryId: string) => Promise<void>;
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  function handleSelectCategory(id: string) {
    const category = selectedCategory === id ? '' : id;

    onSelectCategory(category);
    setSelectedCategory(category);
  }

  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        contentContainerStyle={{ paddingRight: 24 }}
        keyExtractor={category => category.id}
        renderItem={({ item: category }) => {
          const isSelected = selectedCategory === category.id;

          return (
            <CategoryContainer onPress={() => handleSelectCategory(category.id)}>
              <Icon>
                <Text
                  opacity={isSelected ? 1 : 0.5}>
                  {category.icon}
                </Text>
              </Icon>

              <Text
                opacity={isSelected ? 1 : 0.5}
                size={14} weight="700">
                {category.name}
              </Text>
            </CategoryContainer>
          );
        }}
      />
    </>
  );
}

