import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Register() {
  return (
    <View>
      <Text style={styles.titulo}>Sign up for a                      new account.</Text>
      <Text style={styles.titulo2}>We just need some more information.</Text>
      <TextInput
        style={styles.texto}
        placeholder="Name"
      />
      <TextInput
        style={styles.texto}
        placeholder="Email"
      />
      <TextInput
        style={styles.texto}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.texto}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.boton}
        onPress={() => {}}
      >
        <Text style={styles.ingresar}>NEXT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iniciob}>
        <Text style={styles.iniciologin}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  titulo: {
    marginTop: 70,
    marginLeft: 18,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  titulo2: {
    fontSize: 14,
    fontWeight: '200',
    marginBottom: 20,
    marginLeft: 18,
    color:'#808080',
  },
  texto: {
    width: '80%',
    height: 40,
    marginBottom: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#db7093',
    marginLeft: 35,
  },
  boton: {
    backgroundColor: '#db7093',
    padding: 20,
    borderRadius: 25,
    marginTop: 10,
    width: '85%',
    color: '#db7093',
    marginLeft: 26,
  },
  ingresar: {
    fontSize: 19,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  iniciob: {
    marginTop: 120,
    marginEnd: 85,
  },
  iniciologin: {
    color: '#696969',
    alignSelf: 'flex-end',
    fontWeight: '500',
  },
});
