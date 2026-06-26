import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function PressableScreen(){
    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState('');

    return(
        <View style={styles.container}>
            <Text> Componente Pressable</Text>
            <Pressable
                onPress={() => setContador(contador + 1)}
                onLongPress={() => {
                    setContador(0);
                    setMensaje('Contador reiniciado');
                }}
                onPressIn={() => setMensaje('Boton presionado')}
                onPressOut={() => setMensaje('Boton liberado')}

                style={({pressed}) => [
                    styles.boton,
                    pressed ? styles.botonPresionado 
                    : styles.botonNormal
                ]}>
                <Text style={styles.textoBoton}>Presioname</Text>
                </Pressable>

                <Text style={styles.texto}> Contador {contador}</Text>
                <Text style={styles.texto}>Estado: {mensaje}</Text>
                <Text> Manten presionado el boton para reiniciar el contador</Text>

        </View>
    )

}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20,
    }, 
    boton: { 
        padding: 15, 
        borderRadius: 10, 
        width: 180, 
        alignItems: 'center', 
    }, 
    botonNormal: { 
        backgroundColor: '#659ad3', 
    }, 
    botonPresionado: { 
        backgroundColor: '#d89568', 
    },
     textoBoton: { 
        color: '#fff', 
        fontWeight: 'bold', 
    }, 
    texto: { 
        fontSize: 18, 
        marginTop: 20, 
    },
})