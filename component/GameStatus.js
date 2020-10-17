//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function GameStatus(props) {
    return (
        <View>
            <Text style={styles.text} >{props.result}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    text:{
        fontWeight:'600',
        fontSize:30,
    },
});
export default GameStatus;