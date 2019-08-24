<template>
	<v-app-bar app>
		<v-toolbar-title class="headline text-uppercase">
			<span>Vuetify</span>
			<span class="font-weight-light">MATERIAL DESIGN</span>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<router-link
			v-for="link in links" :key="link.name"
			tag="button"
			class="v-btn v-btn--flat v-btn--text theme--light v-size--default"
			:to="{path: link.path}"
		>
			{{link.name}}
		</router-link>
		<v-menu full-width fixed>
			<template v-slot:activator="{on}">
			<v-btn icon v-on="on">
				<v-icon>mdi-cart</v-icon>
			</v-btn>
			</template>

			<v-list flat width="500px" class="text-center pa-2">
				<h4>Cart</h4>
				<p v-if="!getCartProducts.length" class="text-center">No products</p>
				<v-list-item v-else v-for="product in getCartProducts" :key="product._id">
					<cart :product="product"></cart>
				</v-list-item>
				<v-btn v-if="getCartProducts.length" class="success" @click="onClickCheckout">Checkout</v-btn>
			</v-list>
		</v-menu>
		<v-menu>
			<template v-slot:activator="{on}">
			<v-btn icon v-on="on">
				<v-icon>mdi-account-circle-outline</v-icon>
			</v-btn>
			</template>

			<v-list flat width="200px" class="text-center pa-2">
				<h4>Account</h4>
				<v-list-item v-for="link in authLinks" :key="link.name">
					<v-list-item-title>
						<router-link tag="span" :to="{path: link.path}">{{link.name}}</router-link>
					</v-list-item-title>
				</v-list-item>
				<v-list-item v-if="!hasGuest">
					<v-list-item-title>
						<v-btn color="danger" @click="onClickLogout">Logout</v-btn>
					</v-list-item-title>
				</v-list-item>
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
			links: [
				{path: '/home', name: 'Home'},
				{path: '/products', name: 'Products'}
			],
			authLinks: [
				{path: '/login', name: 'Login'},
				{path: '/register', name: 'Register'}
			]
		}
	},
	components: {
		Cart
	},
	computed: {
		...mapGetters(['getCartProducts', 'hasGuest'])
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