import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import HomeScreen from './HomeScreen';

export default function SplashScreen() {
    const [mostrarHome, setMostrarHome] = useState(false);

    useEffect(() => {
        const tiempo = setTimeout(() => {
            setMostrarHome(true);
        }, 2000);
        return () => clearTimeout(tiempo);
    }, []);

    if (mostrarHome) {
        return <HomeScreen />;
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/libros.png')} style={styles.imagen} />
            <Text style={styles.titulo}> Repaso 2 - Registro de libros </Text>
        </View>
    )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFFFFF'
  },

  imagen:{
    width:120,
    height:120,
    marginBottom:20,
    resizeMode:'contain'
  },

  titulo:{
    fontSize:28,
    fontWeight:'bold'
  },
});