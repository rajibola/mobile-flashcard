import React, { useState } from 'react';
import { View, Text, Animated, TouchableOpacity, Easing } from 'react-native';
import { DeckCard } from '../components/deckCard';
import { colors } from '../constants/colors';
import { wp, Deck } from '../utils';
import { homeStyles as styles } from './styles';
import { SharedElement } from 'react-navigation-shared-element';

export const Home = ({ navigation }) => {
  const [selected, select] = useState(0);
  var [animatedWidth, changeWidth] = useState(new Animated.Value(0));

  let optionOne = selected === 1;
  let optionTwo = selected === 2;

  const handleLeftSection = () => {
    animatedWidth.setValue(0);

    Animated.timing(animatedWidth, {
      toValue: wp(35),
      duration: 300,
      useNativeDriver: false,
      easing: Easing.in,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Flashcards</Text>
      <Text style={styles.subheader}>Pick a set to practice</Text>

      <View style={styles.row}>
        <View style={styles.leftContainer}>
          <TouchableOpacity
            style={styles.deck}
            onPress={() => {
              select(2);
              handleLeftSection();
            }}
          >
            <Text
              style={[styles.deckText, optionTwo && { fontFamily: 'Medium' }]}
            >
              Add to decks
            </Text>
            {optionTwo && (
              <Animated.View style={[styles.line, { width: animatedWidth }]} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deck}
            onPress={() => {
              select(1);
              handleLeftSection();
            }}
          >
            <Text
              style={[styles.deckText, optionOne && { fontFamily: 'Medium' }]}
            >
              Deck Collection
            </Text>
            {optionOne && (
              <Animated.View style={[styles.line, { width: animatedWidth }]} />
            )}
          </TouchableOpacity>
        </View>

        <View>
          <SharedElement id={`item.${1}.background`}>
            <DeckCard
              backgroundColor={colors.yellowOpacity}
              title='HTML'
              questionCount={34}
              navigation={navigation}
            />
          </SharedElement>

          {Object.keys(Deck).map((item, i) => {
            const { title, questions, backgroundColor } = Deck[item];
            return (
              <DeckCard
                backgroundColor={backgroundColor}
                title={title}
                questionCount={questions.length}
                key={i}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};
