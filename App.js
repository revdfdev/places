import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';

import AuthScreen from "./src/screens/Auth/Auth";
import FindPlace from "./src/screens/FindPlace/FindPlace";
import SharePlaces from "./src/screens/SharePlace/SharePlace";
import PlaceDetails from "./src/screens/PlaceDetails/PlaceDetails";
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import configureStore from './src/store/configureStore';


const store = configureStore();
// Register Screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-places.FindPlace", () => FindPlace, store, Provider);
Navigation.registerComponent("awesome-places.SharePlace",  () => SharePlaces, store, Provider);
Navigation.registerComponent("awesome-places.PlaceDetails", () => PlaceDetails, store, Provider);
Navigation.registerComponent("awesome-places.SideDrawer", () => SideDrawer);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});