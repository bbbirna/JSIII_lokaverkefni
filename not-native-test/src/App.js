import React, { Component } from 'react';

import { bindActionCreators } from 'redux'; // einfaldar svo þurfi ekki að gera dispatch
import { connect } from 'react-redux';

import Arrivals from './components/arrivals';
import Clock from './components/clock';
import Countdown from './components/countdown';
import Button from './components/btn';
import Dropdowns from './components/dropdowns'
import Banner from './components/banner'

import * as actionCreators from './actions/busData';

class App extends Component {

    componentDidMount() {

    const fetchBusData = bindActionCreators(
      actionCreators.fetchBusData, this.props.dispatch
    );

    // need dateString to fetch api for current day
    let dateTest = new Date();
    let year = dateTest.getFullYear().toString();
    let month = (dateTest.getMonth() + 1).toString();
    month.length < 2 ? month = 0 + month : null;
    let day = (dateTest.getDay() + 1).toString();
    day.length < 2 ? day = 0 + day : null;

    let dateString = year + month + day 

    // console.log( dateString )

    fetch('https://otp.straeto.is/otp/routers/default/index/stops/1:90000091/stoptimes/' + dateString)
    .then((response)=>response.json())
    .then((response)=>{
      fetchBusData(response)
    });
  }

  render() {
    return (
      <div className="App">

        {//<Clock data={this.props.data} timer={this.props.timer} />
        }
        <Banner />
        <Dropdowns viewMore={this.props.viewMore}/>
        <Countdown data={this.props.data} timer={this.props.timer} />
        <Button viewMore={this.props.viewMore}/>
        <Arrivals data={this.props.data} timer={this.props.timer} viewMore={this.props.viewMore} />
        
        

      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  timer: 0,
  viewMore: state.viewMore
})

// Radium er fyrir css trick og kemur inn þegar maður gerir npm install (eða yarn add)
export default connect(mapStateToProps)(App);


