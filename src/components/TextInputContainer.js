import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class TextInputContainer extends Component {

    state = {
        placeName: ""
    };

    placeNameChangeHandler = event => {
        this.setState({
            placeName: event
        });
    };

    placeNameSubmitHandler = () => {
        if (this.state.placeName.trim === "") {
            return;
        }


        this.props.onPlaceAdded(this.state.placeName)
        this.state.placeName = "";
    }


    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    placeholder="An awesome place"
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangeHandler}
                />

                <Button
                    title="Add"
                    onPress={this.placeNameSubmitHandler}
                    style={styles.placeButton}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    placeInput: {
        width: "70%"
    },

    placeButton: {
        width: "30%"
    }
});

export default TextInputContainer;

