import React from 'react';
import { Modal } from 'react-native';
import { Exercise } from '../../types/Exercise';
import { Text } from '../Text';
import { Image, CloseButton } from './styles';
import { Close } from '../Icons/Close';

interface ExerciseModalProps {
  visible: boolean;
  onClose: () => void;
  exercise: Exercise | null
}

export function ExerciseModal({ visible, onClose, exercise }: ExerciseModalProps) {


  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <Image source={{
        uri: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      }}>
        <CloseButton>
          <Close />
        </CloseButton>
      </Image>
      <Text>Hello Modal</Text>
    </Modal>
  );
}
