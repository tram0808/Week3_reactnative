//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function PlayerCard(props) {
    return (
        <View style={styles.column}>
            <Text style={styles.text}>{props.playerName}</Text>
            <Image source={{uri: props.choice.uri}}
                resizeMode='center'
                style={styles.img} />
            <Text style={styles.text} >{props.choice.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    column: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'gray',
        borderRightWidth:2,
    },
    img: {
        width: 150,
        height: 150,
    },
    text:{
        fontWeight:'600',
        fontSize:20,
    },
});
export default PlayerCard;
