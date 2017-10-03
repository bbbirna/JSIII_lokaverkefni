import React, {Component} from 'react';
import { StyleSheet, Text, View, Picker, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import * as actionCreators from './../actions/busData';

class Select extends Component {
	constructor() {
		super();
	}

	render() {
		const showPicker = bindActionCreators(
	      actionCreators.showPicker, this.props.dispatch
	    );

		return(
			this.props.showPicker.length > 0 ?
			<View style={styles.pickerContainer} onPress={()=>{showPicker('')}}>
				<Picker style={styles.picker}>
					<Picker.Item label={this.props.showPicker} value={this.props.showPicker}/>
				</Picker>
			</View> : null
		);
	}
}

const styles = StyleSheet.create({
  pickerContainer: {
  	backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    // flex: 0,
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end'

   
 
  },

  picker: {
  	backgroundColor: '#fff',
  	flex: 0,
  	
  }

});

const mapStateToProps = state => ({
  showPicker: state.showPicker
})



export default connect(mapStateToProps)(Select);