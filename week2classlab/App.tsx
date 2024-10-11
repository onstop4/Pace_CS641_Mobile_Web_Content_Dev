import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import FunctionalComponent from './components/FunctionalComponent';
import AdditionButton from './components/AdditionButton';
import SimpleCounter from './components/SimpleCounter';

const App = () => {
  return (
    <ScrollView>
      <Text>Hello:</Text>
      <Text>(See below)</Text>
      <ActivityIndicator></ActivityIndicator>
      <FunctionalComponent buttonTitle={'One'} showButton={true} />
      <AdditionButton buttonText='Add 5' amount={5} />
      <SimpleCounter secondsBeforeIncrement={3} />
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 500,
    height: 500,
  }
});

export default App;