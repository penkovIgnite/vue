import Vue from "vue";
import Vuex from "vuex";
import mutationProduct from "./modules/product/mutationProduct";
import mutationAuth from "./modules/auth/mutationAuth";
import actionAuth from "./modules/auth/actionAuth";
import gettersAuth from "./modules/auth/gettersAuth";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products: [],
		authToken: ''
	},
	mutations: {
		...mutationProduct,
		...mutationAuth
	},
	actions: {
		...actionAuth
	},
	getters: {
		...gettersAuth
	}
});
