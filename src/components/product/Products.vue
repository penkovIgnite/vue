<template>
	<v-content>
		<v-app>
			<v-row>
				<v-col v-for="product in products[0]" :key="product._id" cols="auto" class="mx-auto">
					<v-card width="400" >
						<v-img class="white--text" height="200px" :src="product.img == '' || !product.img ? notImg : product.img" >
							<v-card-title class="align-end fill-height">{{product.name}}</v-card-title>
						</v-img>

						<v-card-text>{{product.description}}</v-card-text>
						<div class="d-block px-3" color="success">
							<span><v-icon>mdi-currency-usd</v-icon>{{product.price}}</span>
						</div>
						<div class="d-block px-4">Size: <span v-for="attribute in product.attributes">{{attribute}} </span></div>
						<v-card-actions>
							<v-btn color="info">
								<v-icon>mdi-cart</v-icon>
								Add To Cart
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-app>
	</v-content>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import params from '@/config/params'
import {SET_AUTH_TOKEN} from '@/modules/auth/mutationsAuth'

export default {
	name: 'Product',
	data() {
		return {
			notImg: 'https://rimage.gnst.jp/livejapan.com/public/img/common/noimage.jpg?20190126050053'
		}
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
	}
}
</script>

<style>

</style>