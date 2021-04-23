import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Deck, Home, Quiz, AddCard } from '../screens';

const SharedConfig = (route) => {
  const { id, title } = route.params;
  return [
    {
      id: `item.${id + title}.background`,
      animation: 'fade',
    },
    {
      id: `item.${id + title}.title`,
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

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen
          name='Deck'
          component={Deck}
          sharedElementsConfig={SharedConfig}
        />
        <Stack.Screen name='Quiz' component={Quiz} />
        <Stack.Screen name='AddCard' component={AddCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
