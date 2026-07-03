import React from 'react';
import SplashScreen from './Screens/SplashScreen';
import { StyleSheet } from 'react-native';

export default function App() {
  return <SplashScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  }
});
