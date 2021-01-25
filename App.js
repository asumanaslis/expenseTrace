import React, { Component } from 'react';
import BottomNavigator from "./src/router";
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <BottomNavigator />
    );
  }
}

