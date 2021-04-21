import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { AppContext } from '../context/context';

export const Quiz = ({ navigation, route }) => {
  const { title } = route.params;
  const { state, dispatch } = useContext(AppContext);
  const { questions } = state[title];

  return (
    <View style={{ flex: 1, height: '100%' }}>
      <Text>Hello from quiz end {JSON.stringify(questions)}</Text>

      <FlatList
        contentContainerStyle={{ borderWidth: 1 }}
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
