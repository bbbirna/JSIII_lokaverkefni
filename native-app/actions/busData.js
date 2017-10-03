import * as actiontypes from '../actiontypes/busData';

export const fetchBusData = (data) => {
	return {
		type: actiontypes.FETCH_BUSDATA,
		data: data
	}
}

export const showBusData = (value) => {
	return {
		type: actiontypes.SHOW_BUSDATA,
		viewMore: value
	}
}

export const showPicker = (value) => {
	return {
		type: actiontypes.SHOW_PICKER,
		showPicker: value
	}
}
