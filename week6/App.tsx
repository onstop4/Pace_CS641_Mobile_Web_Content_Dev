import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import RefreshControlExample from './components/RefreshControlExample';
import FlatListExample from './components/FlatListExample';
import ModalExample from './components/ModalExample';
import TextInputExample from './components/TextInputExample';

export default function App() {
  const [displayText, setDisplayText] = useState("Button Text");

  function longPressButton() {
    setDisplayText("Long Pressed");
  }

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <Pressable onLongPress={longPressButton} delayLongPress={3000} onHoverIn={showHelperText}>
    //     <Text>{displayText}</Text>
    //   </Pressable>
    // </View>

    // <RefreshControlExample />
    // <FlatListExample />
    // <ModalExample />
    <TextInputExample />
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
