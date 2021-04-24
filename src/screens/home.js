import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { memo, useContext, useEffect, useState } from 'react';
import {
  Animated,
  Easing,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Button, AddDeck, DeckCard } from '../components';
import { colors } from '../constants';
import { receiveDecks, resetStore } from '../context/actions';
import { AppContext } from '../context/context';
import { getDecks, hp, resetDecks, wp } from '../utils';
import { homeStyles as styles } from './styles';

export const Home = memo(({ navigation }) => {
  const [selected, select] = useState(1);
  var [animatedWidth, changeWidth] = useState(new Animated.Value(0));

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

  const _renderItem = ({ item }, i) => {
    const { title, questions, backgroundColor, subtitle } = state[item];

    return (
      <SharedElement id={`item.${i + title}.background`} key={i}>
        <DeckCard
          backgroundColor={backgroundColor}
          title={title}
          subtitle={subtitle}
          questionCount={questions.length}
          navigation={navigation}
          key={title}
          id={i}
        />
      </SharedElement>
    );
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.row, { marginBottom: hp(50) }]}>
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
          <AddDeck onActive={() => setActive(false)} />
        ) : (
          <View>
            {state && (
              <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: hp(340) }}
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
