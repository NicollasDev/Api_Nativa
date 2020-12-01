import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, StatusBar, FlatList, Button } from 'react-native';
import * as Contacts from 'expo-contacts';


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

const ItemContato = ({ nome, id }) => {
    return (
        <View style={styles.item}>
            <Text>{nome}</Text>
            <Button onPress={() => alert(id)} title="Id do contato" />
        </View> 
    )
}

const Contatos = () => {
    const [contatos, setContatos] = useState([]);


    //ciclo de vida, assim que a pagina aparece ja passa pelo useffect
    useEffect(() => {
        (async () => {

            //Pede permissão do usuario para obter os contatos 
            const { status } = await Contacts.requestPermissionsAsync();
            //Permissao concedida
            if (status === 'granted') {
                //Pega todos os contatos 
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Emails],
                });

                //Verifica se existe algum contato
                if (data.length > 0) {
                    setContatos(data);
                }
            }
        })();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <ItemContato nome={item.name} id={item.id} />
        )
    }

    return (
        <View style={styles.container}>
            <Text>Contatos </Text>
            <FlatList
                data={contatos}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Contatos;