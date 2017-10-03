import React, {Component} from 'react';


class Dropdowns extends Component {
	constructor() {
		super();

	}

	render() {
		console.log(this.props.viewMore)
		return(

			<div style={relative}>

				{this.props.viewMore ? 

					null :

					<div>
						<div>		
							<h4>Strætó:</h4>
							
							<select>
								<option>Leið 13</option>
							</select>
							
							<select>
								<option>Mjódd - Eiðistorg</option>
							</select>
							
						</div>
						
						<h4>Biðstöð:</h4>
						
						<select>
							<option>Háteigskirkja</option>
						</select>
					</div>
				
								
				}

			</div> 
		);
	}
}



export default Dropdowns;


let relative = {
	'position': 'relative'
}

