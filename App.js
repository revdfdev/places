import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import FindPlace from "./src/screens/FindPlace/FindPlace";
import SharePlaces from "./src/screens/SharePlace/SharePlace";
import PlaceDetails from "./src/screens/PlaceDetails/PlaceDetails";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import configureStore from "./src/store/configureStore";
import LoginHeader from './src/screens/Auth/header/LoginHeader'

const store = configureStore();
// Register Screens
Navigation.registerComponent(
  "awesome-places.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.FindPlace",
  () => FindPlace,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.SharePlace",
  () => SharePlaces,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.PlaceDetails",
  () => PlaceDetails,
  store,
  Provider
);
Navigation.registerComponent("awesome-places.SideDrawer", () => SideDrawer);
Navigation.registerComponent("awesome-places.LoginHeader",  () => LoginHeader);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    navigatorStyle: {
      navBarHeight: 140,
      drawUnderNavBar: false,
      navBarBackgroundColor: "#0091f1",
      navBarCustomView: "awesome-places.LoginHeader",
      statusBarColor: "#0091f1"
    },
  },
  appStyle: {
    keepStyleAcrossPush: false
  }
});
