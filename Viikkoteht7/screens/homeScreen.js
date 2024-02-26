import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import { useTheme } from '../context/useTheme';

export default function HomeScreen  ()  {
    const {isDarkMode} = useTheme()
  return (
    <View style={[ styles.container, isDarkMode ? styles.dark : styles.light ]}>
      <Text style={isDarkMode ? styles.dark : styles.light}>Home</Text>
    </View>
  );
}

