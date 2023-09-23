
import React from 'react';
import { View, Text, StyleSheet,} from 'react-native';

export default function Clase() {
    return (
        <View style={styles.container}>
        <Text>Trevelo</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        BackgroundColor: "Red",
        fontSize: 20,
    }
})
