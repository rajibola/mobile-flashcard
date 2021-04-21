import { Entypo, SimpleLineIcons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import FlipCard from 'react-native-flip-card';
import { Button } from '../components';
import { colors } from '../constants';
import { addCardToDeck } from '../context/actions';
import { AppContext } from '../context/context';
import { addCardToDeck as addToDeck, wp } from '../utils';
import { addCardStyles as styles } from './styles';

export const AddCard = ({ navigation, route }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const { state, dispatch } = useContext(AppContext);
  const { title } = route.params;

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
      //   navigation.goBack()
    }
  };

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
          flip={false}
          clickable={true}
          onFlipEnd={(isFlipEnd) => {
            console.log('isFlipEnd', isFlipEnd);
          }}
        >
          <View style={styles.face}>
            <Text style={[styles.cardText, { color: colors.white }]}>
              {question || 'Enter question'}
            </Text>
          </View>
          <View style={styles.back}>
            <Text style={[styles.cardText]}>{answer || 'Enter answer'}</Text>
          </View>
        </FlipCard>
        <Input placeholder='Enter Question' onChangeText={setQuestion} />
        <Input placeholder='Enter Answer' onChangeText={setAnswer} />

        <Button title='Add' onPress={handleAddCardToDeck} />
      </View>
    </ScrollView>
  );
};

export const Input = ({ placeholder, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
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
