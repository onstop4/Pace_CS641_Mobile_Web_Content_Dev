// import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './components/pages/Home/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
