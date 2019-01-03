import React from "react";
import { View, Text, Button, AsyncStorage, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthLoadingScreen from 'Containers/AuthLoadingScreen';
import HomeScreen from 'Containers/HomeScreen';
import OtherScreen from 'Containers/TestScreen';
import SignScreen from 'Containers/SignScreen';

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignScreen });


export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));