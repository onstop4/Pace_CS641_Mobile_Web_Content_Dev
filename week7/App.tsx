import './gesture-handler';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Home({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>This is home screen</Text>
      <Button title="Feed" onPress={() => navigation.navigate("Feed")} />
      <Button title="Settings" onPress={() => navigation.navigate("Settings")} />
      <Button title="Date and Time" onPress={() => navigation.navigate("DateAndTime")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}

function Feed({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>This is your feed.</Text>
      <Button title="Feed" onPress={() => navigation.navigate("Feed")} />
      <Button title="Settings" onPress={() => navigation.navigate("Settings")} />
      <Button title="Date and Time" onPress={() => navigation.navigate("DateAndTime")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}

function Settings({ navigation }: { navigation: any }) {
  return (
    // <View style={styles.container}>
    //   <Text>This is settings screen</Text>
    //   <Button title="Date and Time" onPress={() => navigation.navigate("DateAndTime")} />
    //   <Button title="Settings Again" onPress={() => navigation.navigate("Settings")} />
    // </View>
    <>
      <Text>This is settings screen</Text>
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="DateAndTime" component={DateAndTime} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </>
  );
}

function DateAndTime({ navigation }: { navigation: any }) {
  const now = new Date();
  const dateString = now.toLocaleDateString('en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  const timeString = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });

  return (
    <View style={styles.container}>
      <Text>This is the date and time screen.</Text>
      <Text>Date: {dateString}</Text>
      <Text>Time: {timeString}</Text>
      <Button title="Feed" onPress={() => navigation.navigate("Feed")} />
      <Button title="Settings" onPress={() => navigation.navigate("Settings")} />
      <Button title="Date and Time Again" onPress={() => navigation.navigate("DateAndTime")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}

function About({ navigation }: { navigation: any }) {
  return (
    <>
      <Text>This is the about screen.</Text>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="DateAndTime" component={DateAndTime} />
      </Tab.Navigator>
    </>);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="DateAndTime" component={DateAndTime} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
