import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { connect } from 'react-redux';
import PlaceList from "./src/components/PlaceList";
import {addPlace, deletePlace, selectPlace, deselectPlace} from "./src/store/actions/index";
import TextInputContainer from "./src/components/TextInputContainer";
import placeImage from "./src/assets/mumbai.jpg";
import PlaceDetails from "./src/components/PlaceDetails";
// import ListItem from './src/components/ListItem';

class App extends React.Component {


  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeItemSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  placeDeletedHandler = () => {
   this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetails
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <TextInputContainer onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeItemSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);