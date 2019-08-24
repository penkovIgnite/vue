<template>
	<v-app-bar app>
		<v-toolbar-title class="headline text-uppercase">
			<span>Vuetify</span>
			<span class="font-weight-light">MATERIAL DESIGN</span>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn class="mr-2"><router-link :to="{path: '\products'}">Products</router-link></v-btn>
		<v-btn @click="onClickLogout">Logout</v-btn>
		<v-menu full-width fixed>
			<template v-slot:activator="{on}">
			<v-btn icon v-on="on">
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
			</template>

			<v-list flat width="500px" class="text-center pa-2">
				<h4>Cart</h4>
				<p v-if="!getCartProducts.length" class="text-center">No products</p>
				<v-list-item v-else v-for="product in getCartProducts" :key="product._id">
					<cart :product="product"></cart>
				</v-list-item>
				<v-btn class="success" @click="onClickCheckout">Checkout</v-btn>
			</v-list>
		</v-menu>
	</v-app-bar>
</template>

<script>
import Cart from '@/components/store/Cart'

import {mapGetters, mapActions} from 'vuex'

export default {
	data() {
		return {
			activate: true
		}
	},
	components: {
		Cart
	},
	computed: {
		...mapGetters(['getCartProducts'])
	},
	methods: {
		...mapActions(['logout']),
		onClickLogout() {
			this.logout();
		},
		onClickCheckout() {
			this.$router.push({path: '/checkout'});
		}
	}
};
</script>