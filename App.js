import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import { customFonts } from './src/constants/fonts';
import { AppProvider } from './src/context/context';
import { AppNavigator } from './src/navigation';
import { setLocalNotification } from './src/utils';

export default function App() {
  useEffect(() => {
    setLocalNotification();
  }, []);
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return null;
  }

  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}
