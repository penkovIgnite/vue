<template>
	<v-app>
		<v-content>
			<order v-for="order in orders" :key="order._id" :order="order"></order>
		</v-content>
	</v-app>
</template>

<script>
import Order from '@/components/order/Order'

import {mapGetters, mapActions} from 'vuex'

export default {
	name: 'Orders',
	components: {
		Order
	},
	computed: {
		...mapGetters({
			getAuthToken: 'getAuthToken',
			orders: 'getOrders'
		})
	},
	methods: {
		...mapActions(['getAllOrders'])
	},
	created() {
		this.getAllOrders(this.getAuthToken)
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			if(vm.hasGuest)
				vm.$router.push({path: '/'}).catch(err => {});
		});
	}
}
</script>