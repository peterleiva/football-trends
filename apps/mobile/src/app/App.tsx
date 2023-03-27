import { Ionicons } from '@expo/vector-icons';
import { capitalize } from '@utils';
import { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Pressable,
  View,
  Text,
} from 'react-native';
import styles from './App.style';
import { Timer } from './components';
import Button from './components/Button';
import Card from './components/Card';
import Divider from './components/Divider';
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
        <Card
          title="Qual maior 9 da história do futebol ?"
          renderTimer={() => <Timer style={styles.timer}></Timer>}
        >
          <FlatList
            data={[
              {
                id: 1,
                title: 'Ronaldo',
              },
              {
                id: 2,
                title: 'Romário',
              },
              {
                id: 3,
                title: 'Gabibol',
              },
              {
                id: 4,
                title: 'PEdro',
              },
            ]}
            renderItem={({ item, index }) => (
              <Pressable key={item.id} style={styles.option}>
                <Text style={styles.optionNumber}>1</Text>
                <Divider />
                <View>
                  <Text style={styles.optionTitle}>
                    {capitalize(item.title)}
                  </Text>
                </View>
              </Pressable>
            )}
          ></FlatList>

          <Button theme="accent" style={styles.btn}>
            Next
          </Button>
        </Card>
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
