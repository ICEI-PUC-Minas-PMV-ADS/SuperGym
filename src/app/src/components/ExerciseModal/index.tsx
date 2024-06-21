import React from 'react';
import { FlatList, Modal } from 'react-native';
import { Exercise } from '../../types/Exercise';
import { Text } from '../Text';
import { Image, CloseButton, ModalBody, Header, InstructionsHeader, AditionalInfos, Instructions } from './styles';
import { Close } from '../Icons/Close';

import { FooterComponent } from '../Footer/index';
import { Button } from '../Button';

interface ExerciseModalProps {
  visible: boolean;
  onClose: () => void;
  exercise: Exercise;
  onAddToCart: (exercise: Exercise) => void;
}

export function ExerciseModal({ visible, onClose, exercise, onAddToCart }: ExerciseModalProps) {
  const instructions = exercise?.instructions;

  if (!exercise) {
    return null;
  }

  function handleAddToCart() {
    onAddToCart(exercise);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <Image source={{
        uri: exercise?.imagePath,
      }}>
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>
      <ModalBody>
        <Header>
          <Text
            size={24}
            weight='700'
            color='#E89416'>{exercise?.name}</Text>
          <Text
            style={{ marginTop: 8 }}
            color='#666'>{exercise?.description}</Text>
        </Header>

        <InstructionsHeader>
          <Text weight='600'>Instruções 📖</Text>
          <AditionalInfos>
            <Text weight='600'>{exercise?.series}</Text>
            <Text style={{ marginLeft: 16 }} weight='600'>{exercise?.waitTime}</Text>
          </AditionalInfos>
        </InstructionsHeader>

        <FlatList
          data={instructions}
          keyExtractor={(instruction) => instruction}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: instruction }) => (
            <Instructions>
              <Text size={14} color='#666'>֯● {instruction}</Text>
            </Instructions>
          )}
        />

      </ModalBody>
      <FooterComponent>
        <Button onPress={handleAddToCart}>Adicionar exercício</Button>
      </FooterComponent>

    </Modal>
  );
}
