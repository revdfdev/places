import React from 'react';
import { Button, View, StyleSheet } from 'react-native';


const defaultButton = props => (
    <Button style={styles.buttonStyle} {...props} />
);


export default defaultButton;