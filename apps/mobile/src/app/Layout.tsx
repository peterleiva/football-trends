import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat';
import { getColor } from '@utils/colors';
import * as SplashScreen from 'expo-splash-screen';
import { StrictMode, useCallback } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

interface FontProps {
  children: React.ReactNode;
}

export default function Layout({ children }: FontProps) {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat: Montserrat_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <StrictMode>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.layout} onLayout={onLayoutRootView}>
        <View style={styles.container}>{children}</View>
      </SafeAreaView>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: getColor('background'),
    flex: 1,
    position: 'relative',
  },
  container: {
    padding: 24,
    flex: 1,
  },
});
