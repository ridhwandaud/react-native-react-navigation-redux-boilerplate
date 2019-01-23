import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {connect} from 'react-redux';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Check if user loggedIn from redux then navigate to our appropriate place
  _bootstrapAsync = async () => {

    const { LoginReducer } = this.props;

    let loggedIn = LoginReducer.isLoggedIn;

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(loggedIn ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = ({ LoginReducer }) => ({
  LoginReducer
});

export default connect(mapStateToProps, null)(AuthLoadingScreen);