import params from '@/config/params'
import axios from 'axios'

import {order} from '@/modules/store/mutationsStore'

export default {
	order(contex, data) {
		data.userId = contex.state.userId;
		data.productIds = contex.state.cartProducts.map(product => product._id)
		axios.post(`https://baas.kinvey.com/appdata/${params.appKey}/orders`, data, {
			headers: {
				Authorization: `Kinvey ${contex.state.authToken}`,
				"Content-Type": "application/json"
			}
		})
		.then(res => {
			contex.commit(order(res));
		});
	},
};