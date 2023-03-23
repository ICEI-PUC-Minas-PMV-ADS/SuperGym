import React from 'react';
import { Modal } from 'react-native';
import { Exercise } from '../../types/Exercise';
import { Text } from '../Text';

interface ExerciseModalProps {
  visible: boolean;
  onClose: () => void;
  exercise: Exercise | null
}

export function ExerciseModal({ visible, onClose, exercise }: ExerciseModalProps) {
  console.log(exercise);
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <Text>Hello Modal</Text>
    </Modal>
  );
}
