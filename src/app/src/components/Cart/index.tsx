import { FlatList, TouchableOpacity } from 'react-native';
import { Text } from '../Text';

import { CartItem } from '../../types/CartItem';

import { Item, ExerciseContainer, Actions, Image, SeriesContainer, ExerciseDetails, Empty } from './styles';
import { MinusCircle } from '../Icons/MinusCircle';
import { Button } from '../Button';
import { Exercise } from '../../types/Exercise';
import { PlusCircle } from '../Icons/PlusCircle';

import { TrainingConfirmedModal } from '../TrainingConfirmedModal';
import { useState } from 'react';

interface CartProps {
  cartItems: CartItem[];
  onAdd: (exercise: Exercise) => void;
  onRemove: (exercise: Exercise) => void;
  onConfirmTraining: () => void;
  onOk: () => void;
  loading: boolean
}

export function Cart({ cartItems, onRemove, onAdd, onConfirmTraining, onOk, loading }: CartProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);

  async function handleConfirmTraining() {
    if (!loading) setIsModalVisible(true);
    onConfirmTraining();
  }

  async function handleOk() {
    onOk();
    if (loading) setIsModalVisible(false);
  }

  return (
    <>
      <TrainingConfirmedModal loading={loading} onOk={handleOk} visible={isModalVisible} />
      {cartItems.length > 0 &&
        (
          <FlatList
            data={cartItems}
            keyExtractor={cartItem => cartItem.exercise.id}
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 20, maxHeight: 180 }}
            renderItem={({ item: cartItem }) => (
              <Item>
                <ExerciseContainer>
                  <Image
                    source={{
                      uri: cartItem.exercise.imagePath
                    }} />

                  <SeriesContainer>
                    <Text size={12} color='#666'>⚡️ {cartItem.series} séries</Text>
                  </SeriesContainer>

                  <ExerciseDetails>
                    <Text size={14} weight='600'>{cartItem.exercise.name}</Text>
                    <Text size={12}>{cartItem.exercise.description}</Text>
                  </ExerciseDetails>
                </ExerciseContainer>
                <Actions>
                  <TouchableOpacity
                    style={{ marginLeft: 12 }}
                    onPress={() => onAdd(cartItem.exercise)}
                  >
                    <PlusCircle />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ marginLeft: 12 }}
                    onPress={() => onRemove(cartItem.exercise)}
                  >
                    <MinusCircle />
                  </TouchableOpacity>
                </Actions>
              </Item>
            )}
          />
        )

      }

      {cartItems.length > 0 ?
        (
          <Button loading={loading} onPress={handleConfirmTraining}>Confirmar treino</Button>
        ) :

        (
          <Empty>
            <Text style={{ textAlign: 'center', marginBottom: 20 }} size={14} color='#666'>Seu carrinho está vazio</Text>
            <Button disabled>Confirmar treino</Button>
          </Empty>
        )
      }

    </>


  );
}

