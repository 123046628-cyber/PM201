/* Zona 1: Importaciones de archivos y componentes  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componete1 from './Componente1';
import PressableScreen from './PressableScreen';
import SwitchScreen from './SwitchScreen';
import SafeAreaScroolScren from './SafeAreaScroolScren';
import TextInputScreen from './TextInputScreen';
import AlertScreen from './AlertScreen';
import FlatListScreen from './FlatListScreen';
import SectionListScreen from './SectionListScreen';
import ImagenFondo from './ImagenFondoScreen';
import { SplashScreen } from './SplashScreen';
import {Home} from './HomeScreen';

/* Zona 2: Main - Componentes */
export default function App() {
    const [screen, setScreen] = useState('menu');

    useEffect(() => {
        if (screen === 'splashScreen') {
            const timer = setTimeout(() => {
                setScreen('home');
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [screen]);

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
        case 'flat':
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <FlatListScreen volverMenu={() => setScreen('menu')}/>
                </SafeAreaView>
            );

        case 'section':
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <SectionListScreen volverMenu={() => setScreen('menu')}/>
                </SafeAreaView>
            );

        case 'home':
            return <Home/>;

         case 'splashScreen':
            return <SplashScreen/>;
        case 'imagenFondo':
            return <ImagenFondo volverMenu={() => setScreen('menu')}/>;

        default:
            return (
                <SafeAreaView>
                <ScrollView>
                <View>
                    <Text> Menu de Prácticas </Text>

                    <Button title="Practica Tarjetas" onPress={() => setScreen('tarjetas')} />

                    <Button title="Practica Componente 1" onPress={() => setScreen('componente1')} />

                    <Button title="Practica Safe Area View - Scroll View" onPress={() => setScreen('safeArea')} />

                    <Button title="Practica Pressable" onPress={() => setScreen('pressable')} />
                    
                    <Button title="Practica Switch" onPress={() => setScreen('switch')} />

                    <Button title="Practica TextInput" onPress={() => setScreen('textinput')} />

                    <Button title="Practica Alert" onPress={() => setScreen('alert')} />

                    <Button title='Practica FlatList' onPress={() => setScreen('flat')}/>

                    <Button title='Practica SectionList' onPress={() => setScreen('section')}/>

                    <Button title='Práctica Splash' onPress={() => setScreen('splashScreen')}/>

                    <Button title='Práctica ImagenBg' onPress={() => setScreen('imagenFondo')}/>


                </View>
                </ScrollView>
                </SafeAreaView>
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


