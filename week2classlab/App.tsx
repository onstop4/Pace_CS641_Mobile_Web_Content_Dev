import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>Apple:</Text>
      <Text>(See below)</Text>
      <ActivityIndicator></ActivityIndicator>
      <Image style={styles.tinyLogo}
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pink_lady_and_cross_section.jpg" }}></Image>
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
