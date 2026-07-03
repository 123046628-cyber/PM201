import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

export default function Lista({libros}) {
    return (
        <FlatList
            data={libros}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
            <View style={styles.card}>
                <Text style={styles.titulo}>Titulo: {item.titulo}</Text>
                <Text style={styles.info}>Autor: {item.autor}</Text>
                <Text style={styles.info}>Género: {item.genero}</Text>
            </View>
            )}
            
            showVerticalScrollIndicator={false}
        />
    );
}

const styles=StyleSheet.create({

card:{
backgroundColor:'rgba(255,255,255,.95)',
padding:12,
marginBottom:10,
borderRadius:10
},

titulo:{
  color:'#000',
  fontWeight:'bold',
  fontSize:18
},

info:{
  color:'#000',
  fontSize:16
},

});