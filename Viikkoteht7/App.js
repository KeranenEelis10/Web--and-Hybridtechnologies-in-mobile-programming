import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MainAppbar from './components/mainAppBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from './screens/settingsScreen';
import HomeScreen from './screens/homeScreen';
//import { ThemeContext } from './context/themeContext';
import ThemeProvider from './context/themeProvider';

export default function App() {

  const Stack = createNativeStackNavigator()


  return (
    <PaperProvider>
      <ThemeProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#666" barStyle="light-content"/>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{ header: (props) =>
          <MainAppbar{...props} backgroundColor='#666' icon='cog' color='#fff'/>
          }}
        >
          <Stack.Screen name='Home'>
            {() =>
            <HomeScreen />
            }
          </Stack.Screen>
          <Stack.Screen name='Settings' component={SettingsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
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

