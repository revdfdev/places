import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
    <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
);


const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 5, 
        borderColor: '#4598CD',  // color of the border
        backgroundColor: "#ffffff",
        paddingLeft: 15,
        paddingRight: 15
        
    }
});

export default defaultInput;