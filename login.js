import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function Login() {
  return (
    <ImageBackground
      source={require('./imagenes/imagen4.jpg')}
      style={styles.imagen}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Trevelo</Text>
        <View style={styles.fondo2}>
          <View style={styles.recuadro}>
            <TextInput
              style={styles.input}
              placeholder="E-Mail Address"
              placeholderTextColor="#000"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#000"
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.botonlogin}>
              <Text style={styles.texto}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.sesion}>
        <Text style={styles.sesion1}>Already have an account? Log in</Text>
      </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imagen: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 65,
    fontWeight: 'bold',
    marginTop: '40%',
    color: '#fff',
  },
  fondo2: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '100%',
    height: '60%',
  },
  recuadro: {
    width: '85%',
  },
  input: {
    height: 70,
    marginBottom: 20,
    borderBottomWidth: 1,
    marginTop: 10,
    width: '90%',
    borderBottomColor: '#db7093',
  },
  botonlogin: {
    marginTop: 30,
    backgroundColor: '#db7093',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  texto: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  sesion: {
    marginTop: 110,
    marginEnd: 0,
  },
  sesion1:{
    color: '#696969',
    alignSelf: 'flex-end',
    fontWeight: '500',
  }
});


