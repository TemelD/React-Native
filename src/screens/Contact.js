import React, {useState} from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert, TextInput } from "react-native";
import { Button, Text } from "react-native-paper";
import { Avatar } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});

export default function Contact() {
  const [content, setContent] = useState('');

  const handlePress = async () => {
    try {
      // Écrire le contenu dans un fichier
      const fileInfo = await FileSystem.writeAsStringAsync(
        FileSystem.documentDirectory + 'monfichier.txt',
        content
      );

      // Envoyer le fichier par mail via Expo Sharing
      const shareOptions = {
        mimeType: 'text/plain',
        UTI: 'public.plain-text',
        filename: 'monfichier.txt',
        dialogTitle: 'Envoyer mon fichier par mail',
        subject: 'Mon fichier',
        recipients: ['votre_email@example.com'],
        body: 'Veuillez trouver ci-joint mon fichier',
      };
      await Sharing.shareAsync(FileSystem.documentDirectory + 'monfichier.txt', shareOptions);
    } catch (error) {
      Alert.alert('Une erreur est survenue', error.message);
    }
  };

  return (
    <View>
      <Text>AAAAAAAAAAa</Text>
      <TextInput placeholder="Entrez le contenu du fichier" onChangeText={setContent} />
      <Button onPress={handlePress} >Envoyer par mail</Button>
    </View>
  );
  /*return (
      <View style={styles.container}>
        <Text>Gaspar</Text>
        <Avatar.Text size={24} label="TD" />
        <StatusBar style="auto" />
      </View>

      
    );*/
}
