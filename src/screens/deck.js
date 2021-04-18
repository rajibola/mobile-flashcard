import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { deckStyles as styles } from './styles';
import { SharedElement } from 'react-navigation-shared-element';
import { colors } from '../constants';
import { hp } from '../utils';

export const Deck = () => {
  return (
    <View style={styles.container}>
      <SharedElement id={`item.${1}.background`}>
        <View
          style={{
            height: hp(300),
            backgroundColor: colors.yellow,
          }}
        ></View>
      </SharedElement>
    </View>
  );
};
