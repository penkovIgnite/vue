<template>
	<v-app>
		<v-content>
			<h1 class="text-center ma-5">Ckeckout</h1>
			<v-row>
				<v-col cols="12" sm="6">
					<order-form></order-form>
				</v-col>
				<v-col cols="12" sm="6">
					<v-list flat width="500px" class="text-center ma-10 pa-3">
						<h4>Cart</h4>
						<p v-if="!getCartProducts.length" class="text-center">No products</p>
						<v-list-item v-else v-for="product in getCartProducts" :key="product._id">
							<cart :product="product"></cart>
						</v-list-item>
						<router-link
							v-if="!getCartProducts.length"
							class="v-btn v-btn--contained v-btn--router theme--light v-size--default success"
							:to="{path: '/products'}"
							tag="button">Go to shop</router-link>
					</v-list>
				</v-col>
			</v-row>
		</v-content>
	</v-app>
</template>

<script>
import OrderForm from '@/components/store/OrderForm'
import Cart from '@/components/store/Cart'

import {mapGetters} from 'vuex'

export default {
	name: 'Ckeckout',
	components: {
		OrderForm,
		Cart
	},
	computed: {
		...mapGetters(['getCartProducts', 'hasGuest'])
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			if(!vm.getCartProducts.length || vm.hasGuest)
				vm.$router.push(from).catch(err => {});
		});
	}
}
</script>

<style scoped>

</style>