import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Position from './components/position';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Current weather</Text>
      <Position />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});