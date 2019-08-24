<template>
	<v-col cols="auto" class="mx-auto">
		<v-card width="400" >
			<v-img class="white--text" height="200px" :src="product.img == '' || !product.img ? notImg : product.img" >
				<v-card-title class="align-end fill-height">{{product.name}}</v-card-title>
			</v-img>

			<v-card-text>{{product.description}}</v-card-text>
			<div class="d-flex px-3">
				<span><v-icon>mdi-currency-usd</v-icon>{{product.price}}</span>
				<v-spacer></v-spacer>
				<span><v-icon>mdi-calendar-month-outline</v-icon>{{product.period}}</span>
			</div>
			<v-card-actions class="mt-2">
				<v-btn color="info" @click="onClickAddToCard(product._id)">
					<v-icon>mdi-cart</v-icon>
					Add To Cart
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-col>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
	name: 'ViewProduct',
	props: ['product'],
	data() {
		return {
			notImg: 'https://rimage.gnst.jp/livejapan.com/public/img/common/noimage.jpg?20190126050053'
		}
	},
	computed: {
		...mapGetters([
			'getProductById'
		])
	},
	methods: {
		...mapActions(['addToCard']),
		onClickAddToCard(id) {
			this.addToCard(this.getProductById(id));
		}
	}
}
</script>

<style>

</style>