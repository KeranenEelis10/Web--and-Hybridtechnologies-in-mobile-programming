import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {

  const [Upper, setUpper] = useState('');
  const [Lower, setLower] = useState('');
  const [Age, setAge] = useState('');

  function Calculate () {

    if (Age > 100) {
      Alert.alert('Invalid Age', 'Please provide a valid age.');
      return;
    }

    const Upper = (220 - Age) * 0.85
    const Lower = (220 - Age) * 0.65
    setLower(Lower.toFixed(1))
    setUpper(Upper.toFixed(1))
  }

  return (
    <View style={styles.container}>

      <Text style={styles.field}>Age</Text>

      <TextInput 
        style={{height:50, width: 75, paddingBottom:10, color: 'green',}}
        keyboardType='decimal-pad'
        textAlign='center'
        value={Age}
        onChangeText={text => setAge(text)}  
      />

      <Text style={styles.field}>HeartRate limits</Text>
      <Text style={styles.field2}>{Lower}-{Upper}</Text>

      <Button onPress={Calculate} 
      title='Calculate'
      color={'blue'}
      accessibilityLabel="Calculate HeartRate Limits"
      style={styles.button}
      ></Button>

      <StatusBar style="auto" />
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
  button:{
    marginTop: 20,
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
  },
  field:{
    marginBottom: 8,
    color: 'red',
  },
  field2:{
    marginBottom: 8,
    color: 'green',
  },
});
