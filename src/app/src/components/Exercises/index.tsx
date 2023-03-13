import React from 'react';

import { FlatList } from 'react-native';

import { exercises } from '../../mocks/exercises';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';

import {
  ExerciseContainer,
  Image,
  ExerciseDetails,
  Separator,
  AddButton
} from './styles';

export function Exercises() {
  return (
    <FlatList
      data={exercises}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={exercise => exercise._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: exercise }) => {
        return (
          <ExerciseContainer>
            <Image source={{
              uri: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            }} />
            <ExerciseDetails>
              <Text color='#E89416' weight='700'>{exercise.name}</Text>
              <Text style={{ marginVertical: 8 }} size={14} color="#666">{exercise.description}</Text>
              <Text size={14} weight="700">{exercise.series}</Text>
            </ExerciseDetails>

            <AddButton>
              <PlusCircle />
            </AddButton>

          </ExerciseContainer>
        );
      }} />
  );
}
