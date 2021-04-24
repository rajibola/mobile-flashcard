import React, { useContext, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import FlipCard from 'react-native-flip-card';
import { Button, Header, Input } from '../components';
import { colors } from '../constants';
import { addCardToDeck } from '../context/actions';
import { AppContext } from '../context/context';
import { addCardToDeck as addToDeck, changeSize, hp } from '../utils';
import { addCardStyles as styles } from './styles';

export const AddCard = ({ navigation, route }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [textSize, setTextSize] = useState(hp(20));
  const [flip, setFlip] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const { title } = route.params;

  const handleAddCardToDeck = async () => {
    if (question.trim() && answer.trim()) {
      const card = { question, answer };
      await addToDeck(title, card);
      await dispatch(addCardToDeck(title, card));
      setQuestion('');
      setAnswer('');

      alert(`Successfully added "${question}" card to ${title}'s deck`);
    } else {
      alert('Please fill the text input field');
    }
  };

  const { backgroundColor, questions } = state[title];

  return (
    <ScrollView behavior='position' style={styles.container}>
      <Header
        navigation={navigation}
        title={title}
        subtitle={state[title]?.subtitle}
      />

      <View style={styles.addContainer}>
        <FlipCard
          style={styles.card}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={flip}
          clickable={false}
        >
          <View style={[styles.face, { backgroundColor }]}>
            <Text
              style={[
                styles.cardText,
                {
                  color: colors.white,
                  fontSize: question ? changeSize(question.length) : hp(20),
                },
              ]}
            >
              {question || 'Enter question'}
            </Text>
          </View>
          <View style={[styles.back, { borderColor: backgroundColor }]}>
            <Text
              style={[
                styles.cardText,
                { fontSize: question ? changeSize(question.length) : hp(20) },
              ]}
            >
              {answer || 'Enter answer'}
            </Text>
          </View>
        </FlipCard>
        <Input
          placeholder='Enter Question'
          onChangeText={setQuestion}
          onFocus={() => setFlip(false)}
          value={question}
        />
        <Input
          placeholder='Enter Answer'
          onChangeText={setAnswer}
          onFocus={() => setFlip(true)}
          value={answer}
        />

        <Button title='Add' onPress={handleAddCardToDeck} />
      </View>
    </ScrollView>
  );
};
