/* Zona 1: Importaciones de archivos y componentes  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import PressableScreen from './PressableScreen';
import SwitchScreen from './SwitchScreen';

/* Zona 2: Main - Componentes */
export default function App() {
    const [screen, setScreen] = useState('menu');

    switch(screen) {
        case 'tarjetas':
            return <TarjetasScreen />;
        case 'componente1':
            return <Componente1 />;
        case 'pressable':
            return <PressableScreen />;
        default:
            return (
                <View>
                    <Text> Menu de Prácticas </Text>

                    <Button title="Practica Tarjetas" onPress={() => setScreen('tarjetas')} />

                    <Button title="Practica Componente 1" onPress={() => setScreen('componente1')} />

                    <Button title="Practica Pressable" onPress={() => setScreen('pressable')} />


                </View>
            )

  return (
    <View>
      <Text> Aqui va la primer práctica de Componentes Nativos </Text>
    </View>
        ); //return

    } // switch

} //funcion

/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});


