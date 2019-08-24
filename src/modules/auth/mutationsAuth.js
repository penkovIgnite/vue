export const SET_AUTH_USER = 'SET_AUTH_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FILL_AUTH_USER = 'FILL_AUTH_USER';

export const setAuthUser = data => {
	return {
		type: SET_AUTH_USER,
		payload: data
	};
}

export const fillAuthUser = data => {
	return {
		type: FILL_AUTH_USER,
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
	[SET_AUTH_USER] (state, data) {
		let payload = data.payload.data;
		let user = {
			id: payload._id,
			token: payload._kmd.authtoken,
			role: payload.role
		};
		localStorage.setItem('user', JSON.stringify(user));
		state.user = user;
	},
	[FILL_AUTH_USER] (state) {
		let user = JSON.parse(localStorage.getItem('user'));
		if(state.user == '' && user != null)
			state.user = user;
	},
	[LOGOUT_USER] (state) {
		localStorage.removeItem('user');
		state.user = '';
	}
}