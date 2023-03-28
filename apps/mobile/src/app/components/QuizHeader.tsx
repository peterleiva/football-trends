import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import ProgressBar from './ProgressBar';
import ScoreLabel from './ScoreLabel';

interface QuizHeaderProps {
  score: number;
  /**
   * Number between 0 and 100
   */
  progress: number;
  onClose?: () => void;
}

export default function QuizHeader({
  score,
  progress,
  onClose,
}: QuizHeaderProps) {
  return (
    <View style={styles.header}>
      <Ionicons.Button
        name="close"
        size={32}
        color="#fff"
        backgroundColor="transparent"
        onPress={onClose}
      />
      <ProgressBar progress={progress}></ProgressBar>
      <ScoreLabel points={score}></ScoreLabel>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  timer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
});
