import React from 'react'
import {TouchableOpacity, StyleSheet, Text} from "react-native";

const makeStyle = (props) =>{
    return StyleSheet.create({
        container: {
            width:'100%',
            height:50,
            backgroundColor: props.current === props.title ? '#c48bf4' : null,
            justifyContent:'center',
            ...props.style,
        },
        textStyle: {
            fontSize:30,
            color: 'white',
            textAlign:"left",
            paddingLeft:40,
        }
    })
}

const MenuButtonItem = (props) => {
    const styles = makeStyle(props)
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.textStyle}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default MenuButtonItem;