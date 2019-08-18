export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const LOGOUT_USER = 'LOGOUT_USER';

import actionAuth from '@/modules/auth/actionAuth'
import params from '@/config/params'

export const setAuthToken = data => {
	return {
		type: SET_AUTH_TOKEN,
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
	[LOGOUT_USER] (state) {
		localStorage.removeItem('authToken');
		state.authToken = '';
	}
}