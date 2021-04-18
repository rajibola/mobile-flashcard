import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { colors } from './src/constants/colors';
import { customFonts } from './src/constants/fonts';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Deck, Home } from './src/screens';

const SharedConfig = (route) => {
  const { id } = route.params;
  return [
    {
      id: `item.${1}.background`,
      animation: 'fade',
    },
  ];
};

const options = {
  headerShown: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
  gestureEnabled: false,
};

const Stack = createSharedElementStackNavigator();

export default function App() {
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen
          name='Deck'
          component={Deck}
          sharedElementsConfig={SharedConfig}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
