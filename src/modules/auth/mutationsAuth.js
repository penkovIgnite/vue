export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FILL_AUTH_TOKEN = 'FILL_AUTH_TOKEN';

export const setAuthToken = data => {
	return {
		type: SET_AUTH_TOKEN,
		payload: data
	};
}

export const fillAuthToken = data => {
	return {
		type: FILL_AUTH_TOKEN,
		payload: data
	};
}

export const logoutUser = data => {
	return {
		type: LOGOUT_USER,
		payload: data
	};
}

export default {
	[SET_AUTH_TOKEN] (state, data) {
		let authToken = data.payload.data._kmd.authtoken;
		localStorage.setItem('authToken', authToken);
		state.authToken = localStorage.getItem('authToken');
	},
	[FILL_AUTH_TOKEN] (state) {
		var authToken = localStorage.getItem('authToken');
		if(state.authToken == '' && authToken != null)
			state.authToken = authToken;
	},
	[LOGOUT_USER] (state) {
		localStorage.removeItem('authToken');
		state.authToken = '';
	}
}