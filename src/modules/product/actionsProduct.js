import params from '@/config/params'
import axios from 'axios'

import {getAllProducts, createProduct, addToCart} from '@/modules/product/mutationsProduct'

export default {
	getAllProducts(contex, data) {
		axios.get(`https://baas.kinvey.com/appdata/${params.appKey}/products`, {
			headers: {
				Authorization: `Kinvey ${data}`,
				"Content-Type": "application/json"
			}
		})
		.then(res => {
			contex.commit(getAllProducts(res));
		});
	},
	createProduct(contex, data) {
		axios.post(`https://baas.kinvey.com/appdata/${params.appKey}/products`, data, {
			headers: {
				Authorization: `Kinvey ${contex.state.user.token}`,
				"Content-Type": "application/json"
				}
		})
		.then(res => {
			contex.commit(createProduct(res));
		});
	},
	addToCart(contex, data) {
		contex.commit(addToCart(data));
	}
};
