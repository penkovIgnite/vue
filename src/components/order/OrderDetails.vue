<template>
	<v-app>
		<v-content>
			<v-card class="ma-10" width="95%" outlined>
				<v-row>
					<v-col cols="3">
						<v-list-item two-line>
							<v-list-item-content>
								<div class="overline mb-4">ID: {{order._id}}</div>
								<v-list-item-title class="headline mb-1">{{order.firstName}} {{order.lastName}}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-col>
					<v-col cols="3">
						<v-list-item two-line>
							<v-list-item-content>
								<v-list-item-title><b>Address:</b> {{order.address}}</v-list-item-title>
								<v-list-item-title><b>Country:</b> {{order.country}}</v-list-item-title>
								<v-list-item-title><b>City:</b> {{order.city}}</v-list-item-title>
								<v-list-item-title><b>ZIP:</b> {{order.zip}}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-col>
					<v-col cols="3">
						<v-list-item v-if="products.length" v-for="product in products" :key="product._id">
							<cart :product="product"></cart>
						</v-list-item>
					</v-col>
				</v-row>
			</v-card>
		</v-content>
	</v-app>
</template>

<script>
import {SET_ORDER} from '@/modules/order/mutationsOrder'

import Cart from '@/components/store/Cart'

import {mapGetters, mapActions} from 'vuex'

export default {
	name: 'OrderDetails',
	data() {
		return {
			products: []
		}
	},
	components: {
		Cart
	},
	computed: {
		...mapGetters({
			order: 'getOrder',
			token: 'getAuthToken',
			product: 'getProductById'
		})
	},
	methods: {
		...mapActions(['getOrderById'])
	},
	created() {
		let data = {
			token: this.token,
			id: this.$route.params.id
		};
		this.getOrderById(data);
	},
	beforeMount() {
		this.$store.subscribe((mutation, state) => {
			if(mutation.type == SET_ORDER) {
				this.order.productIds.forEach(id => {
					this.products.push(this.product(id));
				});
			}
		});
	}
}
</script>