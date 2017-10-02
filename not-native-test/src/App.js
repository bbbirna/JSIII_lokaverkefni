import React, { Component } from 'react';
import Arrivals from './components/arrivals';
import Clock from './components/clock';
import Countdown from './components/countdown';
import Button from './components/btns';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      timer: 0,
      viewMore: false

    }

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
      this.setState({
        data: response
       });
    });
  }

  render() {
    return (
      <div className="App">

        <Clock data={this.state.data} timer={this.state.timer} />
        <Arrivals data={this.state.data} timer={this.state.timer} />
        <Button viewMore={this.state.viewMore}/>
        <Countdown data={this.state.data} timer={this.state.timer} />

      </div>
      
    );
  }
}

export default App;
