import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

class OtherScreen extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { navigation } = this.props;
    return (
      <View testID="other" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Other Screen</Text>
        <Button
          title="Go to Other... again"
          onPress={() => navigation.push('Other')}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          testID="back_button"
          title="Go back"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }
}

OtherScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default OtherScreen;
