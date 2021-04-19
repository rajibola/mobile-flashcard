import React, { Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { deckCardStyles as styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { wp } from '../utils/layout';
import { Feather } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { SharedElement } from 'react-navigation-shared-element';

export const DeckCard = ({
  backgroundColor,
  title,
  questionCount,
  navigation,
  id,
}) => {
  const textColor =
    backgroundColor() == colors.redOpacity()
      ? colors.white
      : backgroundColor() == colors.blueOpacity()
      ? colors.white
      : backgroundColor() == colors.yellowOpacity() && colors.blue;

  const designColor =
    backgroundColor() == colors.redOpacity()
      ? colors.yellow
      : backgroundColor() == colors.blueOpacity()
      ? colors.yellow
      : backgroundColor() == colors.yellowOpacity() && colors.blue;

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgroundColor() }]}
      onPress={() =>
        navigation.navigate('Deck', {
          backgroundColor: backgroundColor(),
          title,
          questionCount,
          id,
          textColor,
        })
      }
    >
      <View style={[styles.smallCircle, { backgroundColor: designColor }]} />
      <View style={[styles.bigCircle, { backgroundColor: designColor }]} />
      <MaterialCommunityIcons
        name='water'
        size={wp(18)}
        style={[styles.edgedCicle, { color: designColor }]}
      />

      <View>
        <SharedElement id={`item.${id}.title`}>
          <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        </SharedElement>
        <View style={[styles.row, styles.idContainer]}>
          <Text style={[styles.subtitle, { color: textColor }]}>
            Contributors:{' '}
          </Text>
          <View style={styles.image} />
        </View>
      </View>

      <View
        style={[styles.questionContainer, { backgroundColor: designColor }]}
      >
        <Text style={[styles.questionText, { color: backgroundColor() }]}>
          {questionCount} questions
        </Text>
        <View
          style={[styles.rightBox, { backgroundColor: backgroundColor(0.5) }]}
        >
          <Feather name='chevrons-right' size={19} color={colors.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
