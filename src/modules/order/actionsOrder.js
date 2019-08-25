import params from '@/config/params'
import axios from 'axios'

import {setOrders, setOrder, updateOrder} from '@/modules/order/mutationsOrder'

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
	getOrderById(contex, data) {
		axios.get(`https://baas.kinvey.com/appdata/${params.appKey}/orders/${data.id}`, {
			headers: {
				Authorization: `Kinvey ${data.token}`,
				"Content-Type": "application/json"
			}
		})
		.then(res => {
			contex.commit(setOrder(res));
		});
	},
	changeOrderStatus(contex, data) {
		let order = data.order;
		order.status = 'Shipped';
		axios.post(`https://baas.kinvey.com/appdata/${params.appKey}/orders/${data.id}`, order, {
			headers: {
				Authorization: `Kinvey ${data.token}`,
				"Content-Type": "application/json"
			}
		})
		.then(res => {
			contex.commit(updateOrder(res));
		});
	}
};