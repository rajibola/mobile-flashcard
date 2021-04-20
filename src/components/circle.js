import React from 'react';
import { View } from 'react-native';
import { wp } from '../utils';
import { circleStyle as styles } from './styles';

export const Circle = ({ size, position, color }) => {
  return (
    <View
      style={[
        styles.container,
        size && {
          width: wp(size),
          height: wp(size),
          borderRadius: wp(size),
        },
        position && position,
        color && { backgroundColor: color },
      ]}
    />
  );
};
