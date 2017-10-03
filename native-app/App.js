import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bindActionCreators, createStore } from 'redux'; // einfaldar svo þurfi ekki að gera dispatch
import { connect, Provider } from 'react-redux';

/* Components */

import Arrivals from './components/arrivals';
import Clock from './components/clock';
import Countdown from './components/countdown';
import Btn from './components/btn';
import Dropdowns from './components/dropdowns';
import Banner from './components/banner';
import Select from './components/select';

/* Redux stuff */

import busDataReducer from './reducers/busData';
import * as actionCreators from './actions/busData';

const store = createStore( busDataReducer )

export default class App extends React.Component {

  

  render() {
    return (
      <Provider store={store}>
      <View>
        <Banner />
        <Dropdowns />
        <Countdown />
        <Btn />
        <Arrivals />
        <Select />

      </View>
      </Provider>
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





// export default (<Provider store={store}><App /></Provider>)
// registerServiceWorker();
