import React from 'react';
import { TextInput } from 'react-native';
import { NativeSyntheticEvent, TextInputChangeEventData, KeyboardTypeOptions } from 'react-native';


import { Container } from './styles';

interface FieldProps {
  keyboardType: KeyboardTypeOptions;
  value: string;
  placeholder: string;
  onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export function FieldText({ keyboardType, placeholder, onChange, value }: FieldProps) {

  return (
    <Container>
      <TextInput autoCapitalize="none" keyboardType={keyboardType} onChange={onChange} value={value} allowFontScaling placeholder={placeholder} placeholderTextColor="#FFFFFFB2"></TextInput>
    </Container>
  );
}
