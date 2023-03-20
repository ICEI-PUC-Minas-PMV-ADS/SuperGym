import React from 'react';
import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';

import { Overlay, ModalBody, ModalHeader, Form, Input } from './styles';

function ClientNameModal() {
  return (

    <Modal transparent>
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <ModalHeader>
            <Text weight="600">Informe o nome do aluno</Text>

            <TouchableOpacity>
              <Close color='#666' />
            </TouchableOpacity>
          </ModalHeader>

          <Form>
            <Input
              placeholder='Nome do aluno'
              placeholderTextColor="#666" />

            <Button onPress={() => alert('Salvou')}>Salvar</Button>
          </Form>

        </ModalBody>
      </Overlay>
    </Modal>
  );
}

export default ClientNameModal;
