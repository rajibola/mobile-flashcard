import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, Text, TextInput, View } from 'react-native';
import { colors } from '../constants';
import { addDeck } from '../context/actions';
import { AppContext } from '../context/context';
import { addDeckData, hp, saveDeckTitle, wp } from '../utils';
import { Button } from './button';
import { DeckCard } from './deckCard';
import { addDeckStyles as styles } from './styles';

export const AddDeck = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [color, setColor] = useState(colors.yellow);

  const { state, dispatch } = useContext(AppContext);

  const handleAddDeck = async () => {
    await saveDeckTitle(title, subtitle, color);
    dispatch(addDeck(title, subtitle, color));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
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
        containerStyle={{
          marginTop: hp(10),
          width: wp(260),
          elevation: 0,
          marginBottom: hp(3),
          alignSelf: 'center',
        }}
        onPress={handleAddDeck}
      />
    </KeyboardAvoidingView>
  );
};
