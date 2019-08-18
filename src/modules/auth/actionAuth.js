import params from '@/config/params'
import axios from 'axios'

import {setAuthToken, logoutUser} from '@/modules/auth/mutationAuth'

export default {
	login(contex, data) {
		axios.post(`https://baas.kinvey.com/user/${params.appKey}/login`, data, {
			headers: {
				'Authorization': `Basic ${params.authHash}`,
				'Content-Type': 'application/json'
			}
		}).then(res => {
			contex.commit(setAuthToken(res));
		});
	},
	register(contex, data) {
		axios.post(`https://baas.kinvey.com/user/${params.appKey}`, data, {
			headers: {
				'Authorization': `Basic ${params.authHash}`,
				'Content-Type': 'application/json'
			}
		}).then(res => {
			contex.commit(setAuthToken(res));
		});
	},
	logout(contex, data) {
		contex.commit(logoutUser(data));
	}
}