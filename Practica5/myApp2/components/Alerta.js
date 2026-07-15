import { StyleSheet, Text, Alert, Button, View, Platform } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

const Alerta = () => {
    const createTwoButtonAlert = () =>
        Alert.alert('Observación guardada', 'La observación ha sido guardada exitosamente.', [
            {
                text: 'Cancelar',
            },
            {
                text: 'Aceptar',
            },
        ]);
}

if (Platform.OS === "web") {
  Alert.alert = (titular, mensaje, botones) => {
    if (botones && botones.length > 0) {
      const resultado = window.confirm(
        titular + (mensaje ? "\n" + mensaje : "")
      );

      if (resultado) {
        const aceptar = botones.find(b => b.text === "Aceptar");
        if (aceptar && aceptar.onPress) {
          aceptar.onPress();
        }
      } else {
        const cancelar = botones.find(b => b.style === "cancel");
        if (cancelar && cancelar.onPress) {
          cancelar.onPress();
        }
      }
    } else {
      window.alert(titular + (mensaje ? "\n" + mensaje : ""));
    }
  };
}