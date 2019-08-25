import Vue from "vue"
import Vuex from "vuex"

import mutationsAuth from "./modules/auth/mutationsAuth"
import actionsAuth from "./modules/auth/actionsAuth"
import gettersAuth from "./modules/auth/gettersAuth"

import mutationsProduct from "./modules/product/mutationsProduct"
import actionsProduct from "./modules/product/actionsProduct"
import gettersProduct from "./modules/product/gettersProduct"

import mutationsStore from "./modules/store/mutationsStore"
import actionsStore from "./modules/store/actionsStore"
import gettersStore from "./modules/store/gettersStore"

import mutationsOrder from "./modules/order/mutationsOrder"
import actionsOrder from "./modules/order/actionsOrder"
import gettersOrder from "./modules/order/gettersOrder"

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products: [],
		cartProducts: [],
		orders: [],
		order: '',
		user: '',
		authError: ''
	},
	mutations: {
		...mutationsAuth,
		...mutationsProduct,
		...mutationsStore,
		...mutationsOrder
	},
	actions: {
		...actionsAuth,
		...actionsProduct,
		...actionsStore,
		...actionsOrder
	},
	getters: {
		...gettersAuth,
		...gettersProduct,
		...gettersStore,
		...gettersOrder
	}
});
