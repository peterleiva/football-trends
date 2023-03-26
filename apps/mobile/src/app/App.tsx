import { StrictMode, useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import styles from './App.style';
import { Timer } from './components';
import Card from './components/Card';
import ProgressBar from './components/ProgressBar';
import QuizInput from './components/QuizInput';
import ScoreLabel from './components/ScoreLabel';
import Text from './components/Text';
import { Ionicons } from '@expo/vector-icons';

export const App = () => {
  const [text, setText] = useState<string | undefined>('');

  return (
    <StrictMode>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Ionicons.Button
              name="close"
              size={32}
              color="#fff"
              backgroundColor="transparent"
            />
            <ProgressBar progress={30}></ProgressBar>
            <ScoreLabel points={10}></ScoreLabel>
          </View>
          <View>
            <Card title="Qual maior 9 da história do futebol"></Card>
            <Timer style={styles.timer}></Timer>
          </View>

          <View style={styles.bottom}>
            <QuizInput
              style={styles.input}
              onClear={() => setText('')}
              onChange={(e) => setText(e.nativeEvent.text)}
              value={text}
            ></QuizInput>
          </View>
        </View>
      </SafeAreaView>
    </StrictMode>
  );
};

export default App;
