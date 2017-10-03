import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bindActionCreators, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import * as actionCreators from './../actions/busData';

class Countdown extends Component {
	constructor() {
		super();
		// setInterval(()=>{console.log(new Date().toLocaleTimeString())},1000)
		{
			setInterval(()=>{
				// console.log(new Date().toLocaleTimeString())
				this.setState({timer: (new Date().toLocaleTimeString())})
			}, 1000)
		}
	}

	componentDidMount() {
	    const fetchBusData = bindActionCreators(
	    actionCreators.fetchBusData, this.props.dispatch
	    )

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
    });}



	render() {

		let timesArray = [];
		let timesArraySecs = [];
		let futureBusses = []
		// let timeNow = new Date()
		// let timeString = timeNow.toLocaleTimeString();

		// get how many seconds today from midnight
		let dt = new Date();
		let secsTD = dt.getSeconds() + (60 * dt.getMinutes()) + (60 * 60 * dt.getHours());
		// console.log(secsTD)

		// make array with all times at bus stop today
		this.props.data[0] ? 
		this.props.data[0].times.map((times) => {
			let time = times.realtimeArrival * 1000;
			let d = new Date(time); 
			timesArraySecs.push(times.realtimeArrival);
			timesArraySecs = timesArraySecs.sort();
			d = d.toLocaleTimeString();
			timesArray.push(d);
		})
		: null
		timesArray = timesArray.sort()

		// all times at bus stop that are left today
		timesArraySecs.map((times, i) => {
			if (secsTD < times) {
				futureBusses.push(times);
			}
		});

		//
		let secsWaiting = futureBusses[0] - secsTD;
		let d2 = new Date(secsWaiting * 1000);
		let timeWaiting = d2.toLocaleTimeString();
		// let timeWaiting = d2.toLocaleTimeString([], {minute: '2-digit', second:'2-digit'});

		return(
			<View>
				<Text>Næsti strætó kemur eftir</Text>
				<Text>{timeWaiting}</Text>
				<Text>mínútur</Text>
			</View>
		);
	}
}

const mapStateToProps = state => ({
  data: state.data,
})

export default connect(mapStateToProps)(Countdown);
