import React from 'react';
import { TextInput } from 'react-native';
import { inputStyles as styles } from './styles';

export const Input = ({ placeholder, onChangeText, ...props }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      {...props}
    />
  );
};
