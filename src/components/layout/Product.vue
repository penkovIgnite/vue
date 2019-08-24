<template>
	<v-content>
		<v-app>
			<v-row>
				<view-product v-for="product in products[0]" :key="product._id" :product="product"></view-product>
			</v-row>
		</v-app>
	</v-content>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import ViewProduct from '@/components/product/ViewProduct'

import params from '@/config/params'
import {SET_AUTH_TOKEN} from '@/modules/auth/mutationsAuth'
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
				if(mutation.type == SET_AUTH_TOKEN)
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