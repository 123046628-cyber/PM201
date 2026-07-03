import React from 'react';
import {View, Text, TextInput, Pressable, Alert, StyleSheet} from 'react-native';

export default function Formulario({titulo, setTitulo, autor, setAutor, genero, setGenero, agregarLibro, setCargando, cargando}) {
    const guardarLibro = () => {
        if (titulo=='' || autor=='' || genero=='') {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }
        setCargando(true);
        setTimeout(() => {
            agregarLibro({ id: Date.now().toString(),titulo, autor, genero});
            setTitulo('');
            setAutor('');
            setGenero('');
            setCargando(false);

            Alert.alert('Éxito', 'Libro guardado correctamente');
        }, 4000);
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Título del libro"
                placeholderTextColor="gray"
                value={titulo}
                onChangeText={setTitulo}
            />
            <TextInput
                style={styles.input}
                placeholder="Autor del libro"
                placeholderTextColor="gray"
                value={autor}
                onChangeText={setAutor}
            />
            <TextInput
                style={styles.input}
                placeholder="Género"
                placeholderTextColor="gray"
                value={genero}
                onChangeText={setGenero}
            />

            <Pressable 
                style={styles.boton}
                onPress={guardarLibro}
            >
                <Text style={styles.texto}>Agregar libro</Text>
            </Pressable>
        </View>
    )
}

const styles=StyleSheet.create({

input:{
  backgroundColor:'rgba(255,255,255,.9)',
  padding:10,
  borderRadius:8,
  marginBottom:10,
  color:'#000'
},

boton:{
    backgroundColor:'#1565c0f3',
    padding:15,
    borderRadius:8,
    alignItems:'center'
},

texto:{
  color:'#fff',
  fontSize:18,
  fontWeight:'bold'
},

});