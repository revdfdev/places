import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import PlaceList from "./src/components/PlaceList";
import TextInputContainer from "./src/components/TextInputContainer";
import placeImage from "./src/assets/mumbai.jpg";
import PlaceDetails from "./src/components/PlaceDetails";
// import ListItem from './src/components/ListItem';

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          place: placeName,
          image: {
            uri:
              "https://www.escpeuropealumni.org/ressources/temp/80_850x649_541666667_2325561148_2017185440-mumbai.jpg.jpg"
          }
        })
      };
    });
  };

  placeItemSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetails
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <TextInputContainer onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
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
