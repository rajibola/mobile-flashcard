import React from 'react';
import { View, Animated } from 'react-native';
import { wp } from '../utils';
import { circleStyle as styles } from './styles';

export const Circle = ({ size, position, color, style }) => {
  return (
    <Animated.View
      style={[
        styles.container,
        size && {
          width: wp(size),
          height: wp(size),
          borderRadius: wp(size),
        },
        position && position,
        color && { backgroundColor: color },
        style && style,
      ]}
    />
  );
};
