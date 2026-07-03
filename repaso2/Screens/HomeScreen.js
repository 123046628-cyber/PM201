import React, {useState} from 'react';
import {View, Text, ImageBackground, ActivityIndicator, StyleSheet, SafeAreaView} from 'react-native';
import Formulario from '../Components/Formulario';
import Lista from '../Components/Lista';

export default function HomeScreen() {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [libros, setLibros] = useState([]);
    const [cargando, setCargando] = useState(false);
    const agregarLibro = (libro) => {setLibros([...libros, libro])};

    return (
        
        <ImageBackground source={require('../assets/fondo.jpg')} style={styles.fondo}  resizeMode="cover">
            <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Catálogo de libros</Text>
                <Formulario
                    titulo={titulo}
                    setTitulo={setTitulo}
                    autor={autor}
                    setAutor={setAutor}
                    genero={genero}
                    setGenero={setGenero}
                    agregarLibro={agregarLibro}
                    setCargando={setCargando}
                    cargando={cargando}
                />

                {cargando && <ActivityIndicator size="large" color="#0077ff" />}

                <Text style={styles.total}> Total de libros: {libros.length} </Text>
                <Lista libros={libros} />

            </View>
            </SafeAreaView>
        </ImageBackground>
        
    )
}

const styles=StyleSheet.create({

fondo:{
  flex:1,
  backgroundColor:'#1f1f1f'
},

container:{
  flex:1,
  backgroundColor:'rgba(0,0,0,.35)',
  padding:20
},

titulo:{
  color:'#fff',
  fontSize:28,
  fontWeight:'bold',
  textAlign:'center',
  marginTop:50,
  marginBottom:20
},

total:{
  color:'#fff',
  fontSize:18,
  fontWeight:'bold',
  marginVertical:15
},

});