export default {
	getAuthToken(state) {
		return state.authToken == '' ? localStorage.getItem('authToken') : state.authToken;
	}
}