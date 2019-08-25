import Vue from "vue";
import Router from "vue-router";

import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";

import Product from "@/components/layout/Product.vue";
import CreateProduct from "@/components/product/CreateProduct.vue";

import Checkout from "@/components/layout/Checkout.vue";

import Orders from "@/components/layout/Orders.vue";
import OrderDetails from "@/components/order/OrderDetails.vue";

import Thanks from "@/components/layout/Thanks.vue";
import PageNotFound from "@/components/layout/PageNotFound.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		 {
			path: "/",
			name: "products",
			component: Product
		}, {
			path: "/login",
			name: "login",
			component: Login
		}, {
			path: "/register",
			name: "register",
			component: Register
		}, {
			path: "/product/create",
			name: "createProduct",
			component: CreateProduct
		}, {
			path: "/checkout",
			name: "chekcout",
			component: Checkout
		}, {
			path: "/orders",
			name: "orders",
			component: Orders
		}, {
			path: "/order-details/:id",
			name: "order-details",
			component: OrderDetails
		}, {
			path: "/thank-you",
			name: "thanks",
			component: Thanks
		}, {
			path: "*",
			name: "404",
			component: PageNotFound
		}
	]
});
