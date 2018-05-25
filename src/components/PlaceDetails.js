import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';
const placeDetails = props => {

    let modelContent = null;
    if (props.selectedPlace) {
        modelContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.modalImage} />
                <Text style={styles.placeName}>{props.selectedPlace.place}</Text>
            </View>
        );
    }

    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modelContent}
                <View>
                    <Button title="delete" color="red" onPress={props.onItemDeleted} />
                    <Button title="close" onPress={props.onModalClosed} />
                </View>
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    modalContainer: {
        margin: 22,
    },

    modalImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
});




export default placeDetails;