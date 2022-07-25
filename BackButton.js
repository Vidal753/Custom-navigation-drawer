import React from 'react'
import { Feather} from '@expo/vector-icons';
import {TouchableOpacity, StyleSheet} from "react-native";

const makeStyle = (props) =>{
    return StyleSheet.create({
        container: {
            marginHorizontal:20,
            backgroundColor:'purple',
            width: props.bigButton === true ? 40 : 32,
            height: props.bigButton === true ? 40 : 32,
            borderRadius:20,
            justifyContent:'center',
            alignItems: 'center',
            ...props.style,
        }
    })
}

const BackButton = (props) => {
    const styles = makeStyle(props)
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Feather name="arrow-left" size={props.bigButton === true ? 27 : 22} color={props.color ? props.color : 'white'} />
        </TouchableOpacity>
    );
}

export default BackButton;