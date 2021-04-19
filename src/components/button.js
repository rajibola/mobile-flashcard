import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles as styles } from './styles';

export const Button = ({ secondary = false }) => {
  return (
    <TouchableOpacity style={[styles.container, secondary && styles.secondary]}>
      <Text style={[styles.text, secondary && styles.secondaryText]}>
        Start quiz
      </Text>
    </TouchableOpacity>
  );
};
