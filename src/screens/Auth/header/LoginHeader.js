import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import ChatMetricsLogoHeader from "../../../assets/chatmetrics_logo.png";

const loginHeader = props => (
    <View style={styles.headerContainer}>
        <Image
            source={ChatMetricsLogoHeader}
            resizeMode="contain"
            style={styles.logoImage}
        />
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#0091f1"
    },

    logoImage: {
        margin: 5,
        height: Dimensions.get("window").height * 0.2,
        width: Dimensions.get("window").width * 0.6,
    }
});

export default loginHeader;
