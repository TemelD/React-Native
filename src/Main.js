import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { Avatar } from 'react-native-paper';
import Home from './screens/Home';
import Contact from './screens/Contact';
import { BottomNavigation} from 'react-native-paper';


const Stack = createNativeStackNavigator();


const MusicRoute = () => <Text>Home</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;


export default function Main() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'heart-outline'},
    { key: 'Contact', title: 'Contact', focusedIcon: 'home' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: Home,
    Contact: Contact,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
  }

