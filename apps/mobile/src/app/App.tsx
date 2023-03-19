import { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './App.style';
import { QuizInput } from './components';

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.section}>
            <Text style={styles.textLg}>Hello there,</Text>
            <Text style={[styles.textXL, styles.appTitleText]} testID="heading">
              Welcome Mobile
            </Text>
          </View>
          <View>
            <QuizInput>Qual maior 9 da história ?</QuizInput>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
