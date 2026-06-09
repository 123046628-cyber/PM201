/* Zona 1: Importaciones de archivos y componentes  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Saludo} from './components/Saludo'; /* Importación de un componente propio */
import {Saludo2} from './components/Saludo2';
import {Perfil} from './components/Perfil';

/* Zona 2: Main - Componentes */
export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require('./assets/wave.png')}/> {/* Etiqueta de auto cierre */}
      <Text> Hola mundo React Native! </Text>
      <Text> ------------------- </Text>
      <Saludo/> {/* Componente propio */}
      <Text> ------------------- </Text>
      <Saludo2/> {/* Componente propio con tres elementos */}
      <Text> ------------------- </Text>
      <Perfil/> {/* Componente propio con cuatro elementos */}

      <StatusBar style="auto" />

    </View>
  );
}

/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
