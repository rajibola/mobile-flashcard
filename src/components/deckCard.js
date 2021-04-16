import React from 'react';
import { View, Text } from 'react-native';
import { deckCardStyles as styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { wp } from '../utils/layout';
import { Feather } from '@expo/vector-icons';

export const DeckCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.smallCircle} />
      <View style={styles.bigCircle} />
      <MaterialCommunityIcons
        name='water'
        size={wp(18)}
        style={styles.edgedCicle}
      />

      <Text style={styles.title}>JavaScript</Text>
      <View style={[styles.row, styles.idContainer]}>
        <Text style={styles.subtitle}>Identifier: </Text>
        <View style={styles.image} />
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>15 questions</Text>
        <View style={styles.rightBox}>
          <Feather name='chevrons-right' size={24} color='black' />
        </View>
      </View>
    </View>
  );
};
