import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EventoUniScreen from './Screens/EventoUniScreen' 
  
export default function App() { 
  return ( <EventoUniScreen/>); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center', }, 
});