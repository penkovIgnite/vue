import params from '@/config/params'
import axios from 'axios'

import {setAuthUser, logoutUser, fillAuthUser, authError, removeError} from '@/modules/auth/mutationsAuth'

export default {
	login(contex, data) {
		axios.post(`https://baas.kinvey.com/user/${params.appKey}/login`, data, {
			headers: {
				'Authorization': `Basic ${params.authHash}`,
				'Content-Type': 'application/json'
			}
		}).then(res => {
			contex.commit(setAuthUser(res));
		}).catch(error => {
			contex.commit(authError(error.response));
		});
	},
	register(contex, data) {
		axios.post(`https://baas.kinvey.com/user/${params.appKey}`, data, {
			headers: {
				'Authorization': `Basic ${params.authHash}`,
				'Content-Type': 'application/json'
			}
		}).then(res => {
			contex.commit(setAuthUser(res));
			return true;
		}).catch(error => {
			contex.commit(authError(error.response));
			return false;
		});
	},
	fillAuthUser(contex) {
		contex.commit(fillAuthUser());
	},
	logout(contex, data) {
		axios.post(`https://baas.kinvey.com/user/${params.appKey}/_logout`, data, {
			headers: {
				'Authorization': `Kinvey ${contex.state.user.token}`,
				'Content-Type': 'application/json'
			}
		}).then(res => {
			contex.commit(logoutUser(res));
		}).catch(error => {
			contex.commit(authError(error.response));
		});
	},
	removeError(contex) {
		contex.commit(removeError());
	}
}