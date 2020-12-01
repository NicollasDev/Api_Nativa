import React from 'react';
import { Text, View, StyleSheet, Button, StatusBar } from 'react-native';
import * as Speech from 'expo-speech';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    item : {
        backgroundColor : 'gray',
        padding : 20,
        marginVertical : 8,
        marginHorizontal : 16,
        borderRadius : 15
    }
})

const TextToSpeech = () => {

    const speak = () => {
        Speech.speak("Teste com speech");
    }

    return (
        <View style={styles.container}>
            <Button title="Pressione para escutar o texto " onPress={() => speak()} />
        </View>
    )
}

export default TextToSpeech;