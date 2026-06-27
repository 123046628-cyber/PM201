import React, { useState } from 'react';
import {StyleSheet,Text,View,TextInput,Switch,Pressable,Alert,ScrollView,SafeAreaView} from 'react-native';

export default function EventoUniScreen(){

    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');

    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [deportes, setDeportes] = useState(false);

    const enviarRegistro = () => {

        if(nombre.trim()==='' || carrera.trim()==='' || semestre.trim()==='')
        {
            Alert.alert(
                'Error',
                'No se permiten TextInput vacíos.'
            );
            return;
        }

        if(isNaN(semestre)){

            Alert.alert(
                'Error',
                'El semestre debe ser numérico.'
            );
            return;
        }

        Alert.alert(
            'Registro enviado',

            'Nombre: ' + nombre +
            '\nCarrera: ' + carrera +
            '\nSemestre: ' + semestre +
            '\nTaller: ' + (taller ? 'Sí' : 'No') +
            '\nConstancia: ' + (constancia ? 'Sí' : 'No') +
            '\nDeportes: ' + (deportes ? 'Sí' : 'No')
        );

    }

    return(

        <SafeAreaView style={{flex:1}}>

            <ScrollView contentContainerStyle={styles.container}>

                <Text style={styles.titulo}>
                    Registro de Evento Universitario
                </Text>

                <TextInput
                    placeholder="Nombre completo"
                    value={nombre}
                    onChangeText={setNombre}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Carrera"
                    value={carrera}
                    onChangeText={setCarrera}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Semestre"
                    value={semestre}
                    onChangeText={setSemestre}
                    keyboardType="numeric"
                    style={styles.input}
                />

                <View style={styles.switchContainer}>
                    <Text>¿Asistirá al taller?</Text>
                    <Switch
                        value={taller}
                        onValueChange={setTaller}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Text>¿Requiere constancia?</Text>
                    <Switch
                        value={constancia}
                        onValueChange={setConstancia}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Text>
                        ¿Participará en actividades deportivas?
                    </Text>
                    <Switch
                        value={deportes}
                        onValueChange={setDeportes}
                    />
                </View>

                <Pressable 
                    onPress={enviarRegistro} 
                    style={({pressed}) => [ 
                        styles.boton, 
                        pressed 
                        ? styles.botonPresionado 
                        : styles.botonNormal ]} 
                    > 
                    <Text style={styles.textoBoton}> Enviar Registro </Text> 
                </Pressable>

            </ScrollView>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({ 
    container:{ 
        padding:20, 
    }, 
    title:{
        fontSize:24, 
        fontWeight:'bold', 
        textAlign:'center', 
        marginBottom:25, 
    }, 
    input:{
        borderWidth: 1, 
        borderColor:'#919090', 
        borderRadius:10, 
        padding:12, 
        marginBottom:15 
    }, 
    switchContainer:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center', 
        marginBottom:20 
    }, 
    boton:{
        padding:15, 
        borderRadius:10, 
        alignItems:'center', 
        marginTop:20, 
    }, 
    botonNormal:{ 
        backgroundColor: '#82b6e6ef' 
    }, 
    botonPresionado:{ 
        backgroundColor: '#77e668d7' 
    }, 
    textoBoton:{
        color: 'black', 
        fontWeight:'bold', 
        fontSize:16 
    } })