import React from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import {Estudiante} from '../components/Estudiante';

export default function FlatListScreen({volverMenu}){
    const estudiantes =[
        {
            id: 1,
            nombre: 'Carlos',
            carrera: 'ISC'
        },
        {
            id: 2,
            nombre: 'Jose',
            carrera: 'ISC'
        },
        {
            id: 3,
            nombre: 'Maria',
            carrera: 'ISC'
        }
    ];

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Lista de estudiantes </Text>

            <FlatList
                data = {estudiantes}

                renderItem={({item}) => (
                    <Estudiante
                        nombre={item.nombre}
                        carrera={item.carrera}
                    />
                )}

                keyExtractor={(item) => item.id}
            />

            <Button title="Volver al menú" onPress={volverMenu}/>
        </View>
        
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    card: {
        backgroundColor: '#d4f1f4',
        padding: 15,
        margin: 10,
        borderRadius: 10
    }

});
