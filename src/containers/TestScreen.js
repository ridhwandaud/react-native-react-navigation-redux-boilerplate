import React from "react";
import { View, Text, Button, AsyncStorage, TouchableOpacity } from "react-native";

class OtherScreen extends React.Component {
  render() {
    return (
      <View testID='other' style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Other Screen</Text>
        <Button
          title="Go to Other... again"
          onPress={() => this.props.navigation.push('Other')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          testID='back_button'
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default OtherScreen;