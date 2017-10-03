
import * as actiontypes from '../actiontypes/busData';

const initState = {
	    data: [],
      	timer: 0,
  		viewMore: false,
  		showPicker: '',
}

// breytti svo default state í initReducer


// HÉR ER VERIÐ AÐ SETJA STATIÐ

// export default function classesReducer(state=[], action) {
export default function busDataReducer(state=initState, action) {

	switch(action.type){
		case actiontypes.FETCH_BUSDATA:
			return {...state, data: state.data.concat(action.data)};

		case actiontypes.SHOW_BUSDATA:
			// console.log(state)
			return {...state, viewMore: !state.viewMore};

		case actiontypes.SHOW_PICKER:
			// console.log(state)
			return {...state, showPicker: action.showPicker};

		default:
			return state;

	}
}