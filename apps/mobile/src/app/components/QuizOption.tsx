import { capitalize } from '@utils';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Divider from './Divider';

interface QuizOptionProps {
  /**
   * Number relative relative to other options
   */
  order: number;
  /**
   * Text describing the option
   */
  text: string;
  /**
   *  Indicates the option is selected
   */
  selected?: boolean;
}

export default function QuizOption({
  order,
  text,
  selected = false,
}: QuizOptionProps) {
  return (
    <Pressable style={styles.option}>
      <Text style={styles.optionNumber}>{order}</Text>
      <Divider />
      <View>
        <Text style={styles.optionTitle}>{capitalize(text)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  optionTitle: {
    fontWeight: 'bold',
    marginLeft: 12,
  },
  optionNumber: {
    marginRight: 12,
    fontWeight: 'bold',
  },
});
