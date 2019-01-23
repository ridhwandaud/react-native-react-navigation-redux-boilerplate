import React from "react";
import { View, Text, Button, AsyncStorage, TouchableOpacity } from "react-native";
import authActions from 'Actions/AuthActions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View testID='welcome' style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button testID='sign_button' title="Sign in!" onPress={this._signIn} />
      </View>
    );
  }

  _signIn = () => {
    const { authActions, navigation } = this.props;
    authActions.loginUser();
    navigation.navigate('App')
  };
}

const mapStateToProps = ({ LoginReducer }) => ({
  LoginReducer
});

const mapDispatchToProps = (dispatch) => {

  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);