import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput } from "react-native";
import { Button, Text, Avatar, IconButton, MD3Colors,BottomNavigation, Headline } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});



export default function Home({navigation}) {
  

   const [inputValue, setInputValue] = useState('');
  const [values, setValues] = useState([]);

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleAddValue = () => {
    setValues([...values, inputValue]);
    setInputValue('');
  };

  return (
    <View>

<IconButton
    icon="plus"
    iconColor={MD3Colors.primary}
    size={20}
    onPress={() => console.log('Pressed')}
  />
      <TextInput
        placeholder="Entrez une valeur"
        value={inputValue}
        onChangeText={handleInputChange}
      />
      <Button onPress={handleAddValue} >Valider</Button>
      {values.map((value, index) => (
        <Text key={index}>{value}</Text>
      ))}
    </View>
  );

  /*  const [value, setText] = useState('');

    const [maValeur,setMaValeur] = useState('')

 
    return (
      <View style={styles.container}>
        <TextInput
        editable
        multiline
        maxLength={40}
        placeholder='Entrez votre texte ici'
        onChangeText={setText}
        value={value}
        style={{padding: 10, borderWidth : 2}}
      />
        <Button onPress={() => setMaValeur(value)} >Valider</Button>
        <Button onPress={() => navigation.navigate('Contact')}>Go to Contact</Button>
        <Text>{maValeur}</Text>
        <StatusBar style="auto" />

      </View>

      
    );*/
}

