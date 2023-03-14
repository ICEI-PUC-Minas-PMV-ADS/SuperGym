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
              uri: exercise.imagePath,
            }} />
            <ExerciseDetails>
              <Text color='#E89416' weight='700'>{exercise.name}</Text>
              <Text style={{ marginVertical: 8 }} size={14} color="#666">{exercise.description}</Text>
              <Text size={14} weight="700"><Text size={14}>Séries: </Text>{exercise.series}</Text>
            </ExerciseDetails>
            <AddButton>
              <PlusCircle />
            </AddButton>
          </ExerciseContainer>
        );
      }} />
  );
}
