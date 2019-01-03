import React from "react";
import { View, Text, Button, AsyncStorage, TouchableOpacity } from "react-native";

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View testID='welcome' style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button testID='sign_button' title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

export default SignInScreen;