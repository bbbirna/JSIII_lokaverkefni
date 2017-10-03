import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/busData';

class Btn extends Component {
	constructor() {
		super();

	}

	render() {
		const showBusData = bindActionCreators(
	      actionCreators.showBusData, this.props.dispatch
	    );
		return(

			<View>
				<Button title={'hæ'}/>

				{
				// <Button
				// 	raised
				// 	onPress={showBusData}
				// 	title={!this.props.viewMore ? 
				//   		"Sjá fleiri ferðir"
				//   		:" Til baka"} 
				// 	/>

				}
			</View>
		);
	}
}


const mapStateToProps = state => ({
  viewMore: state.viewMore
})

export default connect(mapStateToProps)(Button);