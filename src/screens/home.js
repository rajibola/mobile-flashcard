import React, { useState } from 'react';
import { View, Text, Animated, TouchableOpacity, Easing } from 'react-native';
import { DeckCard } from '../components/deckCard';
import { colors } from '../constants/colors';
import { wp, Decks } from '../utils';
import { homeStyles as styles } from './styles';
import { SharedElement } from 'react-navigation-shared-element';
import { AddDeck } from '../components/addDeck';

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

        <AddDeck />

        {/* <View>
          {Object.keys(Decks).map((item, i) => {
            const { title, questions, backgroundColor } = Decks[item];
            return (
              <SharedElement id={`item.${i}.background`} key={i}>
                <DeckCard
                  backgroundColor={backgroundColor}
                  title={title}
                  questionCount={questions.length}
                  navigation={navigation}
                  key={title}
                  id={i}
                />
              </SharedElement>
            );
          })}
        </View> */}
      </View>
    </View>
  );
};
