import { useState } from 'react';
import { FlatList, KeyboardAvoidingView, View } from 'react-native';
import styles from './App.style';
import { Timer } from './components';
import Button from './components/Button';
import Card from './components/Card';
import QuizHeader from './components/QuizHeader';
import QuizInput from './components/QuizInput';
import QuizOption from './components/QuizOption';
import Layout from './Layout';

export const App = () => {
  const [text, setText] = useState<string | undefined>('');

  return (
    <Layout>
      <QuizHeader score={10} progress={40} />
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
            style={styles.optionList}
            renderItem={({ item, index }) => (
              <QuizOption key={item.id} text={item.title} order={index + 1} />
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
