/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import reducers from "./src/reducers";
import { Provider } from "react-redux";
import Demo from "./src/DemoPage";
import Welcome from "./src/welcomeScreen";
import { createAppContainer, createStackNavigator } from "react-navigation";

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ShowView />
      </View>
    </Provider>
  );
};

const StackNavigate = createStackNavigator(
  {
    welcome: Welcome,
    demo: Demo
  },
  {
    initialRouteName: "welcome",
    headerMode: "none"
  }
);

const ShowView = createAppContainer(StackNavigate);

const styles = {
  container: {
    flex: 1
  }
};

export default App;

//Jyoti Sharma
