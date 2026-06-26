/* Zona 1: Importaciones de archivos y componentes  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import PressableScreen from './PressableScreen';
import SwitchScreen from './SwitchScreen';
import SafeAreaScroolScren from './SafeAreaScroolScren';
import TextInputScreen from './TextInputScreen';
import AlertScreen from './AlertScreen';

/* Zona 2: Main - Componentes */
export default function App() {
    const [screen, setScreen] = useState('menu');

    switch(screen) {
        case 'tarjetas':
            return <TarjetasScreen />;
        case 'componente1':
            return <Componente1 />;
        case 'safeArea':
            return <SafeAreaScroolScren />;
        case 'pressable':
            return <PressableScreen />;
        case 'switch':
            return <SwitchScreen />;
        case 'textinput':
            return <TextInputScreen />;
        case 'alert':
            return <AlertScreen />;
        default:
            return (
                <View>
                    <Text> Menu de Prácticas </Text>

                    <Button title="Practica Tarjetas" onPress={() => setScreen('tarjetas')} />

                    <Button title="Practica Componente 1" onPress={() => setScreen('componente1')} />

                    <Button title="Practica Safe Area View - Scroll View" onPress={() => setScreen('safeArea')} />

                    <Button title="Practica Pressable" onPress={() => setScreen('pressable')} />
                    
                    <Button title="Practica Switch" onPress={() => setScreen('switch')} />

                    <Button title="Practica TextInput" onPress={() => setScreen('textinput')} />

                    <Button title="Practica Alert" onPress={() => setScreen('alert')} />


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


