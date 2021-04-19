import { SimpleLineIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { Text, View, Animated, Easing } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Button } from '../components';
import { hp, wp } from '../utils';
import { deckStyles as styles } from './styles';

export const Deck = ({ route, navigation }) => {
  var [length, changeLength] = useState(new Animated.Value(20));
  var [opacity, changeOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  });

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(length, {
        toValue: -hp(100),
        duration: 800,
        delay: 500,
        useNativeDriver: false,
      }).start(),

      Animated.timing(opacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: false,
      }).start(),
    ]);
  };

  const { title, questionCount, backgroundColor, id, textColor } = route.params;
  return (
    <View style={styles.container}>
      <SharedElement id={`item.${id}.background`}>
        <View style={[styles.topContainer, { backgroundColor }]}>
          <SimpleLineIcons
            name='arrow-left'
            size={wp(22)}
            color={textColor}
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          />
          <SharedElement id={`item.${id}.title`}>
            <Text style={[styles.title, { color: textColor }]}>{title}</Text>
          </SharedElement>
        </View>
      </SharedElement>

      <Animated.View
        style={[styles.questionContainer, { marginTop: length, opacity }]}
      >
        <Text style={styles.questions}>{questionCount}</Text>
        <Text style={styles.cardText}>card</Text>
      </Animated.View>

      <View style={[styles.row, { alignSelf: 'center' }]}>
        <Button />
      </View>
    </View>
  );
};
