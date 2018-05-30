import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, StatusBar, Platform } from "react-native";
import DefaultButton from '../../components/ui/DefaultButton';

import startMainTabs from "../MainTabs/startMainTabs";



class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View height="100%">
        <View style={style.emailInputContainer}>
          <TextInput
            placeholder="Email"
            style={style.emailInput}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={style.passwordInputContainer}>
          <TextInput
            placeholder="Password"
            style={style.passwordInput}
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity onPress={this.loginHandler}>
          <View style={style.loginButtonStyles}>
            <Text style={{ color: "white" }}>Login</Text>
          </View>
        </TouchableOpacity>

        <View style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 8,
          paddingBottom: 5,
        }}>
          <Text style={{
            color: "#0091f1",
            textAlign: "center",
            fontSize: 16
          }}>Don't have an account yet ?</Text>
        </View>
        <View
          style={{
            borderBottomColor: "#0091f1",
            borderBottomWidth: 2,
            width: "25%",
            height: "2%",
            marginBottom: 12,
            alignSelf: 'center',
            marginTop: 15
          }}
        />

        <TouchableOpacity onPress={this.loginHandler}>
          <View style={style.signUpButtonStyles}>
            <Text style={{ color: "#0091f1" }}>Sign up</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AuthScreen;



const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  loginButtonStyles: {
    width: 95,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: "#0091f1",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#0091f1"

  },

  signUpButtonStyles: {
    width: 95,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: "#0091f1",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#fff"

  },

  emailInputContainer: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15,
    alignItems: "center",
    alignContent: "center"
  },

  passwordInputContainer: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 8,
    marginBottom: 8,
    alignItems: "center",
    alignContent: "center"
  },

  emailInput: {
    width: "100 %",
    borderWidth: 2,
    borderRadius: 35,
    borderColor: '#4598CD',  // color of the border
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15
  },

  passwordInput: {
    width: "100 %",
    borderWidth: 2,
    borderRadius: 35, // size/width of the border
    borderColor: '#4598CD',
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15
  }
});
