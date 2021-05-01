import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { memo, useContext, useEffect, useRef, useState } from 'react';
import { Animated, Easing, Text, TouchableOpacity, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { AddDeck, Button, DeckCard } from '../components';
import { colors } from '../constants';
import { receiveDecks, resetStore } from '../context/actions';
import { AppContext } from '../context/context';
import { getDecks, hp, resetDecks, wp } from '../utils';
import { homeStyles as styles } from './styles';

export const Home = memo(({ navigation }) => {
  const [selected, select] = useState(1);
  var [animatedWidth, changeWidth] = useState(new Animated.Value(0));
  const scrollY = useRef(new Animated.Value(0)).current;

  let optionOne = selected === 1;
  let optionTwo = selected === 2;

  const handleLeftSection = () => {
    animatedWidth.setValue(0);

    Animated.timing(animatedWidth, {
      toValue: wp(35),
      duration: 300,
      useNativeDriver: false,
      delay: 200,
      easing: Easing.in,
    }).start();
  };

  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    handleLeftSection();
    handleInitialData();
  }, []);

  const handleInitialData = () => {
    return getDecks().then((decks) => {
      dispatch(receiveDecks(decks));
    });
  };

  const handleResetDeck = async () => {
    await resetDecks();
    dispatch(resetStore());
  };

  const _renderItem = ({ item, index }) => {
    const inputRange = [-1, 0, hp(180) * index, hp(180) * (index + 2)];
    const opacityInputRange = [-1, 0, hp(180) * index, hp(180) * (index + 0.5)];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });

    const translateX = scrollY.interpolate({
      inputRange: [0, 0, index, index],
      outputRange: [1, 1, 1, 1],
    });

    const { title, questions, backgroundColor, subtitle } = state[item];

    return (
      <Animated.View style={{ transform: [{ scale }], opacity }}>
        <SharedElement id={`item.${title}.background`}>
          <DeckCard
            backgroundColor={backgroundColor}
            title={title}
            subtitle={subtitle}
            questionCount={questions.length}
            navigation={navigation}
            key={title}
          />
        </SharedElement>
      </Animated.View>
    );
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.row, {}]}>
        <View>
          <Text style={styles.header}>Flashcards</Text>
          <Text style={styles.subheader}>Pick a set to practice</Text>
        </View>

        <View>
          <Text style={styles.cardTotal}>
            {state && Object.keys(state).length}
          </Text>
          <MaterialCommunityIcons
            name='cards'
            size={wp(30)}
            color={colors.blackOpacity(0.7)}
          />
        </View>
      </View>
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
        {optionTwo ? (
          <AddDeck navigation={navigation} />
        ) : (
          <View>
            {state && (
              <Animated.FlatList
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                  { useNativeDriver: true }
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingBottom: hp(340),
                  paddingTop: hp(50),
                }}
                keyExtractor={({ item }, i) => `${i}` + item}
                data={Object.keys(state)}
                renderItem={_renderItem}
              />
            )}
          </View>
        )}
      </View>
      {optionOne && (
        <Button
          title='Reset Deck'
          containerStyle={{
            position: 'absolute',
            bottom: 0,
            width: wp(375),
            borderRadius: 0,
          }}
          onPress={handleResetDeck}
        />
      )}
    </View>
  );
});
