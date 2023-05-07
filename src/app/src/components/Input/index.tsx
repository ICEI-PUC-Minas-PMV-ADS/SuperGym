import React, { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData, KeyboardTypeOptions, ViewStyle } from 'react-native';
import { Input as TextInput } from './styles';

const backgroundPrimary = 'transparent';
const backgroundSecondary = '#F3f3f3';
const textPrimary = '#FFFFFFB2';
const textSecondary = '#292929b1';

interface InputProps {
  keyboardType: KeyboardTypeOptions;
  value: string;
  placeholder: string;
  onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  secureTextEntry: boolean;
  style?: ViewStyle;
}

export function Input({ secureTextEntry, keyboardType, placeholder, onChange, onFocus, onBlur, value, style }: InputProps) {
  const [inputBackgroundColor, setInputBackgroundColor] = useState(backgroundPrimary);
  const [inputTextColor, setInputTextColor] = useState(textPrimary);
  const [inputPlaceholderColor, setInputPlaceholderColor] = useState(textPrimary);

  const inputStyle = {
    backgroundColor: inputBackgroundColor,
    color: inputTextColor,
    ...style,
  };

  function customOnFocus() {
    onFocus && onFocus();
    setInputBackgroundColor(backgroundSecondary);
    setInputTextColor(textSecondary);
    setInputPlaceholderColor(textSecondary);
  }

  function customOnBlur() {
    onBlur && onBlur();
    setInputBackgroundColor(backgroundPrimary);
    setInputTextColor(textPrimary);
    setInputPlaceholderColor(textPrimary);
  }

  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
      keyboardType={keyboardType}
      onChange={onChange}
      onFocus={customOnFocus}
      onBlur={customOnBlur}
      value={value}
      allowFontScaling
      placeholder={placeholder}
      placeholderTextColor={inputPlaceholderColor}
      style={[inputStyle, style]}
    />
  );
}
