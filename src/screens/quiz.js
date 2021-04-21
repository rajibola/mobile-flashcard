import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { AppContext } from '../context/context';
import FlipCard from 'react-native-flip-card';
import { quizStyles as styles } from './styles';
import { hp, paddingTopiOS } from '../utils';

export const Quiz = ({ navigation, route }) => {
  const { title } = route.params;
  const { state, dispatch } = useContext(AppContext);
  const { questions } = state[title];

  return (
    <View style={{ flex: 1, marginTop: paddingTopiOS }}>
      <Text>Hello from quiz end {JSON.stringify(questions)}</Text>

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
        {/* Face Side */}
        <View style={styles.face}>
          <Text>The Face</Text>
        </View>
        {/* Back Side */}
        <View style={styles.back}>
          <Text>The Back</Text>
        </View>
      </FlipCard>

      <FlatList
        contentContainerStyle={{}}
        data={questions}
        renderItem={({ item, index }) => (
          <Text>
            {item.question}-{index}
          </Text>
        )}
        keyExtractor={(item) => item.question}
      />
    </View>
  );
};
