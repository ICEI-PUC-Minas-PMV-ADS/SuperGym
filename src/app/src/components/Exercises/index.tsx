import React from 'react';

import { FlatList } from 'react-native';


import { Exercise } from '../../types/Exercise';
import { ExerciseModal } from '../ExerciseModal';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import {
  ExerciseContainer,
  Image,
  ExerciseDetails,
  Separator,
  AddButton
} from './styles';

interface ExercisesProps {
  onAddToCart: (exercise: Exercise) => void;
  exercises: Exercise[]
}


export function Exercises({ onAddToCart, exercises }: ExercisesProps) {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [selectedExercise, setIsSelectedExercise] = React.useState<Exercise>();

  function handleOpenModal(exercise: Exercise) {
    setIsModalVisible(true);
    setIsSelectedExercise(exercise);
  }

  return (
    <>
      <ExerciseModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        exercise={selectedExercise!}
        onAddToCart={onAddToCart}
      />
      <FlatList
        data={exercises}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={exercise => exercise.id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: exercise }) => {
          return (
            <ExerciseContainer onPress={() => handleOpenModal(exercise)}>
              <Image source={{
                uri: exercise.imagePath,
              }} />
              <ExerciseDetails>
                <Text color='#E89416' weight='700'>{exercise.name}</Text>
                <Text style={{ marginVertical: 8 }} size={14} color="#666">{exercise.description}</Text>
                <Text size={14} weight="700"><Text size={14}>Séries: </Text>{exercise.series}</Text>
              </ExerciseDetails>

              <AddButton onPress={() => onAddToCart(exercise)}>
                <PlusCircle />
              </AddButton>
            </ExerciseContainer>
          );
        }} />
    </>

  );
}
