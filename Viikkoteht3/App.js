//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Login from './screens/login';

const App = () => {
  return (
      <PaperProvider>
          <Login />
      </PaperProvider>
  );
};


export default App;

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/