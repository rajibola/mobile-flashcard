import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { colors } from '../constants/colors';
import { wp } from '../utils/layout';
import { deckCardStyles as styles } from './styles';

export const DeckCard = ({
  backgroundColor,
  title,
  questionCount,
  navigation,
  subtitle,
}) => {
  const newColor =
    backgroundColor == colors.yellow
      ? colors.yellowOpacity
      : backgroundColor == colors.blue
      ? colors.blueOpacity
      : backgroundColor == colors.red && colors.redOpacity;

  const textColor =
    newColor() == colors.redOpacity()
      ? colors.white
      : newColor() == colors.blueOpacity()
      ? colors.white
      : newColor() == colors.yellowOpacity() && colors.blue;

  const designColor =
    newColor() == colors.redOpacity()
      ? colors.yellow
      : newColor() == colors.blueOpacity()
      ? colors.yellow
      : newColor() == colors.yellowOpacity() && colors.blue;

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: newColor() }]}
      onPress={() =>
        navigation
          ? navigation.navigate('Deck', {
              backgroundColor: newColor(),
              title,
              questionCount,
              textColor,
              subtitle,
            })
          : null
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
        <SharedElement id={`item.${title}.title`}>
          <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        </SharedElement>
        <View style={[styles.row, styles.idContainer]}>
          <Text style={[styles.subtitle, { color: textColor }]}>
            {subtitle}
          </Text>
        </View>
      </View>

      <View
        style={[styles.questionContainer, { backgroundColor: designColor }]}
      >
        <Text style={[styles.questionText, { color: newColor() }]}>
          {questionCount} questions
        </Text>
        <View style={[styles.rightBox, { backgroundColor: newColor(0.5) }]}>
          <Feather name='chevrons-right' size={19} color={colors.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
