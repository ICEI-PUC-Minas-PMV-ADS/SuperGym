import React, { useState } from 'react';

import { FlatList } from 'react-native';

import { categories } from '../../mocks/categories';

import { Text } from '../Text';

import { Category, Icon } from './styles';

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  function handleSelectCategory(id: string) {
    const category = selectedCategory === id ? '' : id;

    setSelectedCategory(category);
  }

  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        contentContainerStyle={{ paddingRight: 24 }}
        keyExtractor={category => category._id}
        renderItem={({ item: category }) => {
          const isSelected = selectedCategory === category._id;

          return (
            <Category onPress={() => handleSelectCategory(category._id)}>
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
            </Category>
          );
        }}
      />
    </>
  );
}

