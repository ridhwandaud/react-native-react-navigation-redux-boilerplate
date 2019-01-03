import React from "react";
import { View, Text, Button, AsyncStorage, TouchableOpacity } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View testID='home' style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button testID='show_button' title="Show me more of the app" onPress={this._showMoreApp} />
        <Button testID='signout_button' title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default HomeScreen;