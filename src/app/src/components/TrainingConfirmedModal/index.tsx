import { Modal } from 'react-native';

import { Container } from './styles';
import { Text } from '../Text';

import { CheckCircle } from '../Icons/CheckCircle';
import { WhiteButton } from '../WhiteButton';

interface TrainingConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function TrainingConfirmedModal({ visible, onOk }: TrainingConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType='fade'
    >
      <Container>
        <CheckCircle />
        <Text style={{ marginTop: 12 }} weight='700' size={20}>Treino Confirmado.</Text>
        <Text style={{ marginTop: 4, marginBottom: 16 }} weight='600' opacity={.9} size={14}>Agora é só enviar para o seu aluno.</Text>
        <WhiteButton
          onPress={onOk}>Donwload PDF</WhiteButton>
      </Container>

    </Modal>
  );
}
