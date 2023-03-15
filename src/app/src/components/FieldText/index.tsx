import React from 'react';
import { TextInput } from 'react-native';

import { Container} from './styles';

interface FieldProps {
  placeholder: string;
}

export function FieldText({ placeholder}: FieldProps) {

  return(
    <Container>
      <TextInput allowFontScaling placeholder={placeholder} placeholderTextColor="#FFFFFFB2"></TextInput>
    </Container>
  );
}
