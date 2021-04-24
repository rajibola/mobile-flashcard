import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { wp } from '../utils';
import { iconButtonStyles as styles } from './styles';
import { colors } from '../constants';

export const IconButton = ({ onPress, name, color }) => {
  return (
    <TouchableOpacity
      style={[styles.iconButton, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Ionicons name={name} size={wp(25)} color={colors.white} />
    </TouchableOpacity>
  );
};
