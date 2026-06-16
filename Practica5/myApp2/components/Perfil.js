/* Perfil usando Destructuración */
import { View, Text, Button, StyleSheet} from 'react-native';
import React, { useState } from 'react'; /* Importamos el hook */

export const Perfil = ({ style, nombre, carrera, materia, cuatri }) => { 
    const [mostrar, setMostrar] = useState(false); /* Declaramos el estado */

    return (
        <View style={[estilos.tarjeta, style]} >
            <Text style={estilos.nombre}> {nombre} </Text>

            {mostrar &&     /* Renderizado condicional */
            <>  {/* Fragmento */}
            <Text style={estilos.carrera}> {carrera} </Text>
            <Text style={estilos.otroTexto}> {materia} </Text>
            <Text style={estilos.otroTexto}> {cuatri} </Text>
            </>
            }

            <Button title="Ver Perfil" onPress={ () => setMostrar(!mostrar)}/>

        </View>
        
    )
}
const estilos = StyleSheet.create({
    nombre:{
        fontSize: 24, /* tamaño de letra */
        fontWeight: 600, /* grosor de letra en negrita */
        textTransform: 'uppercase',/* transforma el texto a mayúsculas */

    },
    carrera:{
        fontSize: 18,
        color: '#b33a84',
        fontFamily: 'Roboto',
    },
    otroTexto:{
        fontSize: 12,
        fontFamily: 'Courier New',
        fontStyle: 'italic',
    },
    tarjeta:{
        borderWidth: 3,
        padding: 25,
        margin: 20,
        backgroundColor: '#ffffff',
    },
});



/* Perfil usando props */
/* import { View, Text} from 'react-native';

export const Perfil = (props) => { 
    return (
        <View>
            <Text> {props.nombre} </Text>
            <Text> {props.carrera} </Text>
            <Text> {props.materia} </Text>
            <Text> {props.cuatri} </Text>
        </View>
        
    )
} */