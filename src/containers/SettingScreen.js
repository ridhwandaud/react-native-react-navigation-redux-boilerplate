import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

class SettingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>
          Setting Screen
        </Text>
      </View>
    );
  }
}


SettingScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SettingScreen;
