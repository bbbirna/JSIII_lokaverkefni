import React, {Component} from 'react';

class Clock extends Component {
	constructor() {
		super();
		// setInterval(()=>{console.log(new Date().toLocaleTimeString())},1000)
		setInterval(()=>{
			// console.log(new Date().toLocaleTimeString())
			this.setState({timer: (new Date().toLocaleTimeString())})
		}, 1000)
		
	}

	render() {
		let timeNow = new Date().toLocaleTimeString();

		return(
			<div>
				<h1>{timeNow}</h1>
			</div>
		);
	}
}
export default Clock;



