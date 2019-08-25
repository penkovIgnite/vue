export const ADMIN = 'admin';
export const GUEST = 'guest';
export const CUSTOMER = 'customer';

export default {
	getAuthToken: (state) => {
		return state.user.token == '' ? JSON.parse(localStorage.getItem('user')) : state.user.token;
	},
	hasGuest: (state) => {
		return state.user.role == GUEST;
	},
	hasAdmin: (state) => {
		return state.user.role == ADMIN;
	},
	getAuthError: (state) => {
		return state.authError;
	},
}