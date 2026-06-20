/* Zona 1: Importaciones de archivos y componentes  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Perfil} from '../components/Perfil';

/* Zona 2: Main - Componentes */
export default function App() {
  return (
    <View style={styles.container}>

      <Perfil style={styles.tarjetaMorada} nombre="Zoe Huerta1" carrera="Ing. en Sistemas" materia="Móvil" cuatri="9no"/>

      <Perfil style={styles.tarjetaRosa} nombre="Danna Huerta2" carrera="Ing. en Sistemas" materia="Móvil" cuatri="9no"/>

      <Perfil style={styles.tarjetaMorada} nombre="Zoe Huerta3" carrera="Ing. en Sistemas" materia="Móvil" cuatri="9no"/>

    </View>
  );
}

/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  tarjetaMorada:{
    backgroundColor: '#d8b4fe',
  },
  tarjetaRosa:{
    backgroundColor: '#f4ccde',
  },
});
