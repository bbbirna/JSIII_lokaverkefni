import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { bindActionCreators } from 'redux'; // einfaldar svo þurfi ekki að gera dispatch
import { connect } from 'react-redux';

import Arrivals from './components/arrivals';
import Clock from './components/clock';
import Countdown from './components/countdown';
import Btn from './components/btn';
import Dropdowns from './components/dropdowns'
import Banner from './components/banner'

import * as actionCreators from './actions/busData';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your ass to open the developer menu.</Text>
        <Btn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
