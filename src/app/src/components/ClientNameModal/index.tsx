import React, { useState } from 'react';
import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';

import { Overlay, ModalBody, ModalHeader, Form, Input } from './styles';

interface ClientNameModal {
  visible: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
}

function ClientNameModal({ visible, onClose, onSave }: ClientNameModal) {
  const [name, setName] = useState('');

  function handleSave() {
    setName('');
    onSave(name);
    onClose();
  }

  return (
    <Modal
      transparent
      visible={visible}
      animationType='fade'
    >
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <ModalHeader>
            <Text weight="600">Informe o nome do aluno</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color='#666' />
            </TouchableOpacity>
          </ModalHeader>

          <Form>
            <Input
              placeholder='Nome do aluno'
              placeholderTextColor="#666"
              onChangeText={setName} />

            <Button
              disabled={name.length === 0}
              onPress={handleSave}>Salvar</Button>
          </Form>

        </ModalBody>
      </Overlay>
    </Modal>
  );
}

export default ClientNameModal;
