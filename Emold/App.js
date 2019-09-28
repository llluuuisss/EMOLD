import React, { Component } from 'react';
import { Button,StyleSheet, Text, View } from 'react-native';

const cssdaw = StyleSheet.create({
    kulayBlue: {
      color: 'blue',
      fontSize: 30,
    }
})

export default class HelloWorldApp extends Component {
  _onPressButton() {
    alert('talaga?')
  }
  render() {
    return (
      <View style={{ flex: 1,flexDirection:'column',backgroundColor:'powderblue', justifyContent: "center", alignItems: "center" }}>
        <Text style={cssdaw.kulayBlue}>Union Bank!</Text>
        
        <Button onPress={this._onPressButton}
            title="Test"/>

        <Text>test</Text>
      </View>
    );
  }
}
