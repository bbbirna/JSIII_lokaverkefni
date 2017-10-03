import React, {Component} from 'react';
import { Text, View, Picker, Item, Button } from 'react-native';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';
import * as actionCreators from './../actions/busData';




class Dropdowns extends Component {
	constructor() {
		super();

	}

	render() {
		// console.log(this.props.viewMore)

		const showPicker = bindActionCreators(
	      actionCreators.showPicker, this.props.dispatch
	    );

		return(

			<View>

				{this.props.viewMore ? 

					null :

					<View>
						<View>		
							<Text>Strætó:</Text>
							<ModalDropdown defaultValue={'Leið 11'} options={['leið 11']}/>
							<ModalDropdown defaultValue={'Mjódd - Eiðistorg'} options={['Mjódd - Eiðistorg']} />
						</View>

						<Text>Biðstöð:</Text>
						
						{
							// <Picker>
							// 	<Picker.Item label={'Háteigskirkja'} value={'Háteigskirkja'}/>
							// </Picker>
						}

						<View>
							<Button title={'Leið 11'} onPress={()=>{showPicker('Leið 11')}}/>
							<Button title={'Mjódd - Eiðistorg'} onPress={()=>{showPicker('Mjódd - Eiðistorg')}}/>
							<Button title={'Háteigskirkja'} onPress={()=>{showPicker('Háteigskirkja')}}/>
					
						</View>
						
					</View>					
				}
			</View> 
		);
	}
}

const mapStateToProps = state => ({
  viewMore: state.viewMore,
  showPicker: state.showPicker
})

export default connect(mapStateToProps)(Dropdowns);






