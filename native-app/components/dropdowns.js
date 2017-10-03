import React, {Component} from 'react';
import { Text, View } from 'react-native';


class Dropdowns extends Component {
	constructor() {
		super();

	}

	render() {
		console.log(this.props.viewMore)
		return(

			<View style={relative}>

				{this.props.viewMore ? 

					null :

					<View>
						<View>		
							<h4>Strætó:</h4>
							
							<select>
								<option>Leið 13</option>
							</select>
							
							<select>
								<option>Mjódd - Eiðistorg</option>
							</select>
							
						</View>
						
						<h4>Biðstöð:</h4>
						
						<select>
							<option>Háteigskirkja</option>
						</select>
					</View>					
				}
			</View> 
		);
	}
}


export default Dropdowns;


let relative = {
	'position': 'relative'
}

