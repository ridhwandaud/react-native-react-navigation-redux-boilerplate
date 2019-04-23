import React from "react";
import { View, Text, Button, AsyncStorage, TouchableOpacity } from "react-native";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import authActions from 'Actions/AuthActions';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>
          Home Screen
        </Text>
      </View>
    );
  }
}

export default HomeScreen;