import React, {Component} from 'react';

class Button extends Component {
	constructor() {
		super();

	}

	render() {
		return(
			<div>
				<button onClick={()=>{this.setState({viewMore: true})}}>button</button>
			</div>
		);
	}
}
export default Button;

