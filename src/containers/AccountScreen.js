import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import authActions from 'Actions/AuthActions';

class AccountScreen extends React.Component {

  _signOut = () => {
    const { authActions } = this.props;
    authActions.logoutUser();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>
          Account Screen
        </Text>
        <Button title="Sign Out" onPress={this._signOut} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
};


AccountScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(AccountScreen);
