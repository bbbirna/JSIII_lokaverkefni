import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements'


class Arrivals extends Component {
	constructor() {
		super();
		
		{
			setInterval(()=>{
				// console.log(new Date().toLocaleTimeString())
				this.setState({timer: (new Date().toLocaleTimeString())})
			}, 60000)
		}
	}

	render() {
		// if(this.props.data[0]) {
		// 	console.log(this.props.data[0].times);
		// }
		
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


		return(
			<View>
									
				
				{this.props.viewMore ?
				
				<List>
					{	
						futureBusses.map((times, i) => {
							let d3 = new Date(times * 1000);
							let arrivalTime = d3.toLocaleTimeString();
							return(
								<ListItem key={i} title={arrivalTime} />
							);
						})
					}
				</List>

				: null}
			</View>
		);
	}
}


const mapStateToProps = state => ({
  data: state.data,
  timer: 0,
  viewMore: state.viewMore
})

export default connect(mapStateToProps)(Arrivals);


