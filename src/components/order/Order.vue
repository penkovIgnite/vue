<template>
	<v-card class="ma-10" width="95%" outlined>
		<v-row>
			<v-col cols="6">
				<v-list-item two-line>
					<v-list-item-content>
						<div class="overline mb-4">ID: {{order._id}}</div>
						<v-list-item-title class="headline mb-1">{{order.firstName}} {{order.lastName}}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-col>
			<v-col cols="6">
				<v-list-item two-line>
					<v-list-item-content>
						<v-list-item-title>Number of products: {{order.productIds.length}}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-col>
		</v-row>

		<v-card-actions>
			<v-btn>View Details</v-btn>
			<v-btn color="success">Status Shipping</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: 'Order',
	props: {
		order: Object
	}
}
</script>