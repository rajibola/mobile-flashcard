import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DeckCard } from './src/components/deckCard';
import { hp, wp } from './src/utils/layout';

export default function App() {
  return (
    <View style={styles.container}>
      <DeckCard />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
