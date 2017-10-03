import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/busData';

class Button extends Component {
	constructor() {
		super();

	}

	render() {
		const showBusData = bindActionCreators(
	      actionCreators.showBusData, this.props.dispatch
	    );
		return(

			<div>
				<button onClick={showBusData}>
					{
						!this.props.viewMore ? 
						"Sjá fleiri ferðir"
						:" Til baka"
					}
				</button>
			</div>
		);
	}
}


const mapStateToProps = state => ({
  viewMore: state.viewMore
})

export default connect(mapStateToProps)(Button);