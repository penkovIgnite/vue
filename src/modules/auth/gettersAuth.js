export default {
	getAuthToken: (state) => {
		return state.user.token == '' ? JSON.parse(localStorage.getItem('user')) : state.user.token;
	},
	hasGuest: (state) => {
		return state.user.role == 'guest';
	},
	getAuthError: (state) => {
		return state.authError;
	},
}