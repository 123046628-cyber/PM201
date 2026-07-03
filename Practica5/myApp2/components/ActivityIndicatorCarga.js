import React, {useState, useEffect, useRef} from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';

export default function ActivityIndicatorDemo() {
    const [loading, setLoading] = useState(false);
    const [mensaje, setMensaje] = useState('Presiona el boton para comenzar');
    const temporizador = useRef(null);

    useEffect(() => {
    return () => {
        clearTimeout(temporizador.current);
    };
}, []);

    const cargarDatos = () => {
        clearTimeout(temporizador.current);
        setLoading(true);
        setMensaje('Cargando informacion...');

    temporizador.current = setTimeout(() => {
        setLoading(false);
        setMensaje('Datos cargados correctamente');
    }, 3000);
    };

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> 
                Simulación de carga
            </Text>
            <Text style={styles.descripcion}>
                Este ejemplo simula tres segundos de una carga de datos.
            </Text>

            <Button title={loading ? 'Cargando...' : 'Obtener datos'} onPress={cargarDatos} disabled={loading}/>

            <View style={styles.container}>
                <ActivityIndicator size='large'color='Green' animating={loading}/>
            </View>

            <Text style={styles.texto}> {mensaje} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 3,
    marginBottom: 20,
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descripcion: {
    color: '#444444',
    lineHeight: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  indicador: {
    height: 60,
    justifyContent: 'center',
    marginTop: 10,
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
  },

});