import { StrictMode } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import styles from './App.style';
import { QuizFormControl, Timer } from './components';

export const App = () => {
  return (
    <StrictMode>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.scrollView}>
          <Timer style={styles.timer}></Timer>
          <QuizFormControl>Qual maior 9 da história ?</QuizFormControl>
        </View>
      </SafeAreaView>
    </StrictMode>
  );
};

export default App;
