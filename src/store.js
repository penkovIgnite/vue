import Vue from "vue"
import Vuex from "vuex"

import mutationsAuth from "./modules/auth/mutationsAuth"
import actionsAuth from "./modules/auth/actionsAuth"
import gettersAuth from "./modules/auth/gettersAuth"

import mutationsProduct from "./modules/product/mutationsProduct"
import actionsProduct from "./modules/product/actionsProduct"
import gettersProduct from "./modules/product/gettersProduct"

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products: [],
		card: [],
		authToken: ''
	},
	mutations: {
		...mutationsAuth,
		...mutationsProduct
	},
	actions: {
		...actionsAuth,
		...actionsProduct
	},
	getters: {
		...gettersAuth,
		...gettersProduct
	}
});
