<template>
	<v-content>
		<v-app>
			<h1 class="text-center mt-10">Products</h1>
			<v-row  class="ma-10">
				<v-overlay absolute opacity=".5" v-if="!products.length">
					<v-progress-circular indeterminate size="64"></v-progress-circular>
				</v-overlay>
				<view-product v-else v-for="product in products[0]" :key="product._id" :product="product"></view-product>
			</v-row>
		</v-app>
	</v-content>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import ViewProduct from '@/components/product/ViewProduct'

import params from '@/config/params'
import {SET_AUTH_USER} from '@/modules/auth/mutationsAuth'
import {CREATE_PRODUCT} from '@/modules/product/mutationsProduct'

export default {
	name: 'Product',
	components: {
		ViewProduct
	},
	computed: {
		...mapGetters({
			getAuthToken: 'getAuthToken',
			products: 'getAllProducts'
		})
	},
	methods: {
		...mapActions(['login', 'getAllProducts'])
	},
	created() {
		if(this.getAuthToken == null) {
			this.login(params.collectionAuth);
			this.$store.subscribe((mutation, state) => {
				if(mutation.type == SET_AUTH_USER)
					this.getAllProducts(this.getAuthToken);
			})
		} else {
			this.getAllProducts(this.getAuthToken);
		}

		this.$store.subscribe((mutation, state) => {
			if(mutation.type == CREATE_PRODUCT)
				this.getAllProducts(this.getAuthToken);
		})
	}
}
</script>

<style scoped>

</style>