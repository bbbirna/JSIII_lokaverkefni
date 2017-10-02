import React, {Component} from 'react';

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
			<div>
				<h1>{timeWaiting}</h1>
			</div>
		);
	}
}
export default Countdown;

