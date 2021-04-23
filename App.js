import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { customFonts } from './src/constants/fonts';
import { AppProvider } from './src/context/context';
import { Deck, Home, Quiz } from './src/screens';
import { AddCard } from './src/screens/addCard';

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

export default function App() {
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return null;
  }

  return (
    <AppProvider>
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
    </AppProvider>
  );
}
