<template>
	<v-app-bar app>
		<v-toolbar-title class="headline text-uppercase">
			<span>Vue service store</span>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<router-link
			v-if="hasAdmin"
			v-for="link in adminLink" :key="link.name"
			tag="button"
			class="v-btn v-btn--flat v-btn--text theme--light v-size--default"
			:to="{path: link.path}"
		>
			{{link.name}}
		</router-link>

		<router-link
			v-for="link in links" :key="link.name"
			tag="button"
			class="v-btn v-btn--flat v-btn--text theme--light v-size--default"
			:to="{path: link.path}"
		>
			{{link.name}}
		</router-link>

		<router-link
			v-if="hasGuest"
			v-for="link in authLinks" :key="link.name"
			tag="button"
			class="v-btn v-btn--flat v-btn--text theme--light v-size--default"
			:to="{path: link.path}"
		>
			{{link.name}}
		</router-link>

		<v-btn text class="text-error" v-if="!hasGuest" @click="onClickLogout">Logout</v-btn>

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
	</v-app-bar>
</template>

<script>
import Cart from '@/components/store/Cart'

import params from '@/config/params'
import {LOGOUT_USER} from '@/modules/auth/mutationsAuth'
import {mapGetters, mapActions} from 'vuex'

export default {
	data() {
		return {
			links: [
				{path: '/', name: 'Products'}
			],
			authLinks: [
				{path: '/login', name: 'Login'},
				{path: '/register', name: 'Register'}
			],
			adminLink: [
				{path: '/product/create', name: 'Create Product'},
				{path: '/orders', name: 'View Orders'},
			]
		}
	},
	components: {
		Cart
	},
	computed: {
		...mapGetters(['getCartProducts', 'hasGuest', 'hasAdmin'])
	},
	methods: {
		...mapActions(['login', 'logout']),
		onClickLogout() {
			this.logout();
			this.$store.subscribe((mutation, state) => {
				if(mutation.type == LOGOUT_USER) {
					this.login(params.collectionAuth);
					this.$router.push({path: '/'});
				}
			})
		},
		onClickCheckout() {
			if(this.hasGuest) {
				this.$router.push({path: '/login', query: {location: 'cart'}});
			} else {
				this.$router.push({path: '/checkout'});
			}
		}
	}
};
</script>