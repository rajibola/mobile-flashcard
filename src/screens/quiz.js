import { Ionicons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { Animated, Easing, Text, TouchableOpacity, View } from 'react-native';
import FlipCard from 'react-native-flip-card';
import { Button } from '../components';
import { colors } from '../constants';
import { AppContext } from '../context/context';
import { changeSize, hp, paddingTopiOS, wp } from '../utils';
import { Header } from './addCard';
import { quizStyles as styles } from './styles';

export const Quiz = ({ navigation, route }) => {
  const { title } = route.params;
  const { state, dispatch } = useContext(AppContext);
  const { questions, subtitle } = state[title];
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [opacity, changeOpacity] = useState(new Animated.Value(0));
  const [flip, setFlip] = useState(false);

  const percentage = (percent, total) => {
    return ((percent / 100) * total).toFixed(0);
  };

  const totalSize = 150;
  const getValueTotal = Math.floor(correct / count) * 100;
  const size = percentage(getValueTotal, totalSize);
  const checkCompleted = () => {
    if (count == questions.length - 1) {
      setCompleted(true);

      console.log('CORRECT', correct);
      console.log('COUNT', count);

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
    setCorrect(count + 1);
    setCount((prev) => prev + 1);
    checkCompleted();
    setFlip(false);
  };
  const handleIncorrect = () => {
    setIncorrect((prev) => prev + 1);
    setCount((prev) => prev + 1);
    checkCompleted();
    setFlip(false);
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
        <View>
          <Text style={styles.quizCompleted}>Quiz Completed</Text>
          <Text style={styles.quizCompletedValue}>
            {correct}/{count} correct
          </Text>

          <View style={styles.percentage}>
            <Animated.Text style={[styles.quizCompletedValue, { opacity }]}>
              {Math.floor((correct / count) * 100)}%
            </Animated.Text>
          </View>
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
              onFlipEnd={(isFlipEnd) => {
                console.log('isFlipEnd', isFlipEnd);
              }}
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
            <Button title='Flip' onPress={() => setFlip(!flip)} />
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

export const IconButton = ({ onPress, name, color }) => {
  return (
    <TouchableOpacity
      style={[styles.iconButton, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Ionicons name={name} size={wp(25)} color={colors.white} />
    </TouchableOpacity>
  );
};
