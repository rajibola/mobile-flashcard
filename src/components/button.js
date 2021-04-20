import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles as styles } from './styles';

export const Button = ({
  secondary,
  title,
  containerStyle,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, secondary && styles.secondary, containerStyle]}
      onPress={onPress}
    >
      <Text style={[styles.text, secondary && styles.secondaryText, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
