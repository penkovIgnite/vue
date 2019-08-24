<template>
	<v-row>
		<v-list-item-avatar>
			<v-img contain :src="product.img"></v-img>
		</v-list-item-avatar>
		<v-list-item-content>
			<v-list-item-title v-text="product.name"></v-list-item-title>
		</v-list-item-content>
		<v-list-item-content class="d-flex">
			<span><v-icon>mdi-currency-usd</v-icon>{{product.price}}</span>
		</v-list-item-content>
	</v-row>
</template>

<script>
export default {
	props: ['product']
}
</script>

<style scoped>

</style>