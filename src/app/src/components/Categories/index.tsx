import React from 'react';

import { FlatList } from 'react-native';

import { categories } from '../../mocks/categories';

import { Text } from '../Text';

import { Category, Icon } from './styles';

export function Categories() {

  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        contentContainerStyle={{ paddingRight: 24 }}
        keyExtractor={category => category._id}
        renderItem={({ item: category }) => (
          <Category>
            <Icon>
              <Text>{category.icon}</Text>
            </Icon>

            <Text size={14} weight="700">{category.name}</Text>
          </Category>
        )}
      />
    </>
  );
}

