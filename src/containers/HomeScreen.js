import React from "react";
import { View, Text, Button, AsyncStorage, TouchableOpacity } from "react-native";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import authActions from 'Actions/AuthActions';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View testID='home' style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button testID='show_button' title="Show me more of the app" onPress={this._showMoreApp} />
        <Button testID='signout_button' title="Actually, sign me out :)" onPress={this._signOut} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOut = () => {
    const { authActions } = this.props;
    authActions.logoutUser();
    this.props.navigation.navigate('Auth');
  };
}

const mapDispatchToProps = (dispatch) => {

  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(HomeScreen);