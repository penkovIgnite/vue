import params from '@/config/params'
import axios from 'axios'

import {setAuthUser, logoutUser, fillAuthUser} from '@/modules/auth/mutationsAuth'

export default {
	login(contex, data) {
		axios.post(`https://baas.kinvey.com/user/${params.appKey}/login`, data, {
			headers: {
				'Authorization': `Basic ${params.authHash}`,
				'Content-Type': 'application/json'
			}
		}).then(res => {
			contex.commit(setAuthUser(res));
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
		});
	},
	fillAuthUser(contex) {
		contex.commit(fillAuthUser());
	},
	logout(contex, data) {
		contex.commit(logoutUser(data));
	}
}