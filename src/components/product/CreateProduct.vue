<template>
	<v-app>
		<v-content>
			<v-form @submit.prevent="onSubmitCreateProduct">
				<v-card width="800" class="mx-auto mt-5">
					<v-card-title>
						<h1>Create Product</h1>
					</v-card-title>
					<v-card-text>
						<v-text-field label="Name" v-model="name"></v-text-field>
						<v-text-field label="Description" v-model="description"></v-text-field>
						<v-text-field label="Price" v-model="price"></v-text-field>
						<v-text-field label="Image" v-model="img"></v-text-field>
						<v-text-field label="In Stoke" v-model="inStoke"></v-text-field>
						<v-text-field label="Sizes" v-model="sizes"></v-text-field>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="success" type="submit">Add product</v-btn>
					</v-card-actions>
				</v-card>
			</v-form>
		</v-content>
	</v-app>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
	data() {
		return {
			name: '',
			description: '',
			price: 0,
			img: '',
			inStoke: 0,
			sizes: '',
			attributes: []
		}
	},
	methods: {
		...mapActions(['createProduct']),
		onSubmitCreateProduct() {
			var size = [];
			this.sizes.split(', ').forEach(function(element) {
				size.push(element);
			});
			this.attributes = size;

			this.createProduct({
				name: this.name,
				description: this.description,
				price: this.price,
				img: this.img,
				inStoke: this.inStoke,
				attributes: this.attributes,
			});
		}
	}
};
</script>

<style scoped>

</style>