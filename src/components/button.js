import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles as styles } from './styles';

export const Button = ({ secondary, title, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.container, secondary && styles.secondary, containerStyle]}
    >
      <Text style={[styles.text, secondary && styles.secondaryText, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
