import { Navigation } from 'react-native-navigation';
import Icons from 'react-native-vector-icons/Ionicons'


const startTabs = () => {
    Promise.all([
        Icons.getImageSource("md-map", 30),
        Icons.getImageSource("ios-share-alt", 30),
        Icons.getImageSource("ios-menu", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlace",
                    label: "Find place",
                    title: "Find place",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },

                {
                    screen: "awesome-places.SharePlace",
                    label: "Share place",
                    title: "Share place",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],

            drawer: {
                left: {
                    screen: "awesome-places.SideDrawer"
                }
            }
        })
    })
}

export default startTabs;
