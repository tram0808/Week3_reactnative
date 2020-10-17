//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import {CHOICES} from '../constants';

function ButtonGroup(props) {
    return CHOICES.map(item => {
        return (
            <TouchableOpacity
               key={item.name}
                style={styles.button}
                onPress={() => props.onPressButton(item.name)}
            >
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        );
    })
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'peru',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical:15,
        marginVertical: 15, //canh doc

    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },

});
export default ButtonGroup;
