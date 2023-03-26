import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import styles from './App.style';
import { Timer } from './components';
import Card from './components/Card';
import ProgressBar from './components/ProgressBar';
import QuizInput from './components/QuizInput';
import ScoreLabel from './components/ScoreLabel';
import Layout from './Layout';

export const App = () => {
  const [text, setText] = useState<string | undefined>('');

  return (
    <Layout>
      <View style={styles.header}>
        <Ionicons.Button
          name="close"
          size={32}
          color="#fff"
          backgroundColor="transparent"
          onPress={() => {
            alert('Close!!');
          }}
        />
        <ProgressBar progress={20}></ProgressBar>
        <ScoreLabel points={2}></ScoreLabel>
      </View>
      <View>
        <Card title="Qual maior 9 da história do futebol"></Card>
        <Timer style={styles.timer}></Timer>
      </View>

      <KeyboardAvoidingView
        behavior="padding"
        style={styles.bottom}
        keyboardVerticalOffset={60}
      >
        <QuizInput
          style={styles.input}
          onClear={() => setText('')}
          onChange={(e) => setText(e.nativeEvent.text)}
          value={text}
        ></QuizInput>
      </KeyboardAvoidingView>
    </Layout>
  );
};

export default App;
