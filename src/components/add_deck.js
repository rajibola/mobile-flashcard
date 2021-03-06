import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, View } from 'react-native';
import { colors } from '../constants';
import { addDeck } from '../context/actions';
import { AppContext } from '../context/context';
import { addDeckData, hp, saveDeckTitle, wp } from '../utils';
import { Button } from './button';
import { DeckCard } from './deck_card';
import { addDeckStyles as styles } from './styles';

export const AddDeck = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [color, setColor] = useState(colors.yellow);

  const { dispatch } = useContext(AppContext);

  const handleAddDeck = async () => {
    if (title.trim() && subtitle.trim()) {
      await saveDeckTitle(title, subtitle, color);
      await dispatch(addDeck(title, subtitle, color));
      navigation.navigate('Deck', {
        title,
        subtitle,
        backgroundColor: newColor(),
        textColor,
      });
    } else alert('Please fill all inputs!');
  };

  const newColor =
    color == colors.yellow
      ? colors.yellowOpacity
      : color == colors.blue
      ? colors.blueOpacity
      : color == colors.red && colors.redOpacity;

  const textColor =
    newColor() == colors.redOpacity()
      ? colors.white
      : newColor() == colors.blueOpacity()
      ? colors.white
      : newColor() == colors.yellowOpacity() && colors.blue;

  return (
    <KeyboardAvoidingView
      behavior='position'
      keyboardVerticalOffset={50}
      style={styles.container}
    >
      <DeckCard
        backgroundColor={color}
        title={title || 'Deck Title'}
        subtitle={subtitle || 'Subtitle'}
      />

      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        placeholder={'Enter Title'}
        placeholderTextColor={colors.blackOpacity(0.4)}
      />

      <TextInput
        style={styles.input}
        onChangeText={setSubtitle}
        placeholder={'Enter Subtitle'}
        placeholderTextColor={colors.blackOpacity(0.4)}
      />

      <View style={styles.colorContainer}>
        <Text style={styles.pickColorText}>Pick color</Text>
        {addDeckData.cards.map(({ color, setCardColor }, i) => {
          return (
            <MaterialCommunityIcons
              {...addDeckData.iconsConfig}
              color={color}
              onPress={() => setColor(setCardColor)}
              key={i}
            />
          );
        })}
      </View>
      <Button
        title='submit'
        containerStyle={styles.submitButton}
        onPress={handleAddDeck}
      />
    </KeyboardAvoidingView>
  );
};
