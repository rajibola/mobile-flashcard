import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Button, Circle } from '../components';
import { colors } from '../constants';
import { removeDeck } from '../context/actions';
import { AppContext } from '../context/context';
import { circleData, removeDeck as removeDeckFromStore, wp } from '../utils';
import { deckStyles as styles } from './styles';

export const Deck = ({ route, navigation }) => {
  const { title, subtitle, backgroundColor, id, textColor } = route.params;

  const { state, dispatch } = useContext(AppContext);

  const handleDeleteDeck = async () => {
    await removeDeckFromStore(title);
    await dispatch(removeDeck(title));
    navigation.navigate('Home');
  };

  const designColor =
    backgroundColor == colors.redOpacity()
      ? colors.yellow
      : backgroundColor == colors.blueOpacity()
      ? colors.yellow
      : backgroundColor == colors.yellowOpacity() && colors.blue;

  const countColor =
    backgroundColor === colors.yellowOpacity() ? textColor : backgroundColor;

  const handleStartQuiz = () => {
    state[title]?.questions.length
      ? navigation.navigate('Quiz', { title })
      : alert('Deck is empty!');
  };

  return (
    <View style={styles.container}>
      <SharedElement id={`item.${id + title}.background`}>
        <View style={[styles.topContainer]}>
          <View style={styles.header}>
            <SimpleLineIcons
              name='arrow-left'
              size={wp(22)}
              color={colors.blackOpacity(0.7)}
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            />
            <MaterialIcons
              name='delete'
              size={24}
              color={colors.blackOpacity(0.9)}
              onPress={handleDeleteDeck}
            />
          </View>
          <SharedElement id={`item.${id + title}.title`}>
            <Text style={[styles.title]}>{title}</Text>
          </SharedElement>
          <Text style={[styles.subtitle]}>{subtitle}</Text>

          <View style={[styles.questionContainer, { backgroundColor }]}>
            {circleData.map(({ size, position }, i) => (
              <Circle
                size={size}
                color={designColor}
                position={position}
                key={i}
              />
            ))}
            <Text style={[styles.questions, , { color: textColor }]}>
              {state[title]?.questions.length}
            </Text>
            <Text style={[styles.cardText, { color: textColor }]}>Cards</Text>
          </View>

          <View style={[styles.row, styles.buttonContainer]}>
            <Button
              title={'Add Card'}
              secondary
              textStyle={{ color: countColor }}
              containerStyle={{ borderColor: countColor }}
              onPress={() => navigation.navigate('AddCard', { title })}
            />
            <Button
              title={'Start Quiz'}
              containerStyle={{ backgroundColor: countColor, elevation: 0 }}
              onPress={handleStartQuiz}
            />
          </View>
        </View>
      </SharedElement>
    </View>
  );
};
