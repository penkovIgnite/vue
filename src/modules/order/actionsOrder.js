import params from '@/config/params'
import axios from 'axios'

import {setOrders, setOrder} from '@/modules/order/mutationsOrder'

export default {
	getAllOrders(contex, token) {
		axios.get(`https://baas.kinvey.com/appdata/${params.appKey}/orders`, {
			headers: {
				Authorization: `Kinvey ${token}`,
				"Content-Type": "application/json"
			}
		})
		.then(res => {
			contex.commit(setOrders(res));
		});
	},
	getOrderById(contex, token, id) {
		axios.get(`https://baas.kinvey.com/appdata/${params.appKey}/orders/${id}`, {
			headers: {
				Authorization: `Kinvey ${token}`,
				"Content-Type": "application/json"
			}
		})
		.then(res => {
			contex.commit(setOrder(res));
		});
	}
};