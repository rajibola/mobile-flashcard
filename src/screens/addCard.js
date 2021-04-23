import { Entypo, SimpleLineIcons } from '@expo/vector-icons';
import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import FlipCard from 'react-native-flip-card';
import { Button } from '../components';
import { colors } from '../constants';
import { addCardToDeck } from '../context/actions';
import { AppContext } from '../context/context';
import { addCardToDeck as addToDeck, changeSize, hp, wp } from '../utils';
import { addCardStyles as styles } from './styles';

export const AddCard = ({ navigation, route }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [textSize, setTextSize] = useState(hp(20));
  const [flip, setFlip] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const { title } = route.params;

  //   useEffect(()=>{

  //   },[])

  const handleAddCardToDeck = async () => {
    if (question.trim() && answer.trim()) {
      const card = {
        question,
        answer,
      };
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

export const Input = ({ placeholder, onChangeText, ...props }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      {...props}
    />
  );
};

export const Header = ({ title, subtitle, navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.topHeader}>
        <SimpleLineIcons
          name='arrow-left'
          size={wp(22)}
          color={colors.blackOpacity(0.7)}
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        />

        <Entypo
          name='home'
          size={wp(24)}
          color={colors.blackOpacity(0.9)}
          onPress={() => navigation.navigate('Home')}
          style={styles.backButton}
        />
      </View>

      <Text style={styles.headerTitle}>{title}</Text>
      {subtitle && <Text style={styles.headerSubtitle}>{subtitle}</Text>}
    </View>
  );
};
