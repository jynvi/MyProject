import React, { Component } from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";

class welcomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../src/assets/back.jpg")}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center"
          }}
        >
          <Avatar
            containerStyle={{
              borderWidth: 2,
              borderColor: "#999",
              shadowOffset: 5,
              shadowRadius: 5,
              shadowColor: "#999",
              shadowOpacity: 0.3
            }}
            rounded
            size="xlarge"
            source={require("../src/assets/girl.jpg")}
          />
          <Text
            style={{
              color: "#000",
              fontSize: 20,
              fontFamily: "serif",
              paddingBottom: 5,
              textAlign: "center",
              marginTop: 5,
              fontWeight: "400"
            }}
          >
            Jyoti Sharma
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("demo")}
          >
            <Text
              style={{
                color: "#000",
                fontSize: 18,
                padding: 10,
                margin: 15,
                textAlign: "center",
                fontWeight: "bold",
                backgroundColor: "#ecf0f1"
              }}
            >
              View Profile
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default welcomeScreen;
//Jyoti Sharma