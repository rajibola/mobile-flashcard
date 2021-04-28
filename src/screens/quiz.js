import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useContext, useEffect, useState } from 'react';
import { Animated, Easing, Text, TouchableOpacity, View } from 'react-native';
import FlipCard from 'react-native-flip-card';
import { Button, Header, IconButton } from '../components';
import { colors } from '../constants';
import { AppContext } from '../context/context';
import {
  changeSize,
  clearLocalNotification,
  hp,
  paddingTopiOS,
  scorePercentage,
  setLocalNotification,
  wp,
} from '../utils';
import { quizStyles as styles } from './styles';

export const Quiz = ({ navigation, route }) => {
  const { title } = route.params;
  const { state } = useContext(AppContext);
  const { questions, subtitle } = state[title];

  const [count, setCount] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [opacity, changeOpacity] = useState(new Animated.Value(0));
  const [flip, setFlip] = useState(false);

  const checkCompleted = () => {
    if (count == questions.length - 1) {
      setCompleted(true);
      clearLocalNotification().then(setLocalNotification);

      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 1000,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  };

  const handleCorrect = () => {
    setCorrectAnswer(correctAnswer + 1);
    setCount(count + 1);
    setFlip(false);
    checkCompleted();
  };
  const handleIncorrect = () => {
    setIncorrect(incorrect + 1);
    setCount(count + 1);
    setFlip(false);
    checkCompleted();
  };

  const handleReset = () => {
    setCorrectAnswer(0);
    setIncorrect(0);
    setCount(0);
    setCompleted(false);
  };

  const question = questions[count]?.question;
  const answer = questions[count]?.answer;

  return (
    <View
      style={{
        flex: 1,
        marginTop: paddingTopiOS,
        backgroundColor: colors.white,
      }}
    >
      <Header title={title} subtitle={subtitle} navigation={navigation} />

      {completed ? (
        <View style={{ flex: 1 }}>
          <Text style={styles.quizCompleted}>Quiz Completed</Text>
          <Text
            style={[
              styles.quizCompletedValue,
              scorePercentage(correctAnswer, count) < 50 && {
                color: colors.red,
              },
            ]}
          >
            {correctAnswer}/{count} correct
          </Text>

          <View
            style={[
              styles.percentage,
              scorePercentage(correctAnswer, count) < 50 && {
                borderColor: colors.red,
              },
            ]}
          >
            <Animated.Text
              style={[
                styles.quizCompletedValue,
                { opacity },
                scorePercentage(correctAnswer, count) < 50 && {
                  color: colors.red,
                },
              ]}
            >
              {scorePercentage(correctAnswer, count)}%
            </Animated.Text>
          </View>

          <TouchableOpacity
            style={styles.restartContainer}
            onPress={handleReset}
          >
            <MaterialCommunityIcons
              name='restore'
              size={wp(35)}
              color={colors.white}
            />
          </TouchableOpacity>

          <Button
            title='Back to Deck'
            containerStyle={styles.backToDeck}
            onPress={() => navigation.goBack()}
          />
        </View>
      ) : (
        <View>
          <View style={styles.cardContainer}>
            <FlipCard
              style={styles.card}
              friction={9}
              perspective={1000}
              flipHorizontal={true}
              flipVertical={false}
              flip={flip}
              clickable={false}
            >
              <View style={styles.face}>
                <Text
                  style={[
                    styles.question,
                    { fontSize: hp(changeSize(question?.length)) },
                  ]}
                >
                  {questions[count]?.question}
                </Text>
                <Text style={styles.position}>
                  {count + 1}/{questions.length}
                </Text>
              </View>
              <View style={styles.back}>
                <Text
                  style={[
                    styles.answer,
                    { fontSize: hp(changeSize(answer?.length)) },
                  ]}
                >
                  {questions[count]?.answer}
                </Text>
              </View>
            </FlipCard>
          </View>

          <View style={styles.buttonContainer}>
            <IconButton
              name='close'
              onPress={handleIncorrect}
              color={colors.red}
            />
            <Button title='Flip' onPress={() => setFlip(!flip)} secondary />
            <IconButton
              name='checkmark'
              onPress={handleCorrect}
              color={colors.blue}
            />
          </View>
        </View>
      )}
    </View>
  );
};
