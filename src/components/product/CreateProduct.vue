<template>
	<v-app>
		<v-content>
			<v-form @submit.prevent="onSubmitCreateProduct">
				<v-card width="800" class="mx-auto mt-5">
					<v-card-title>
						<h1>Create Product</h1>
					</v-card-title>
					<v-card-text>
						<v-text-field
							:rules="($v.name.$error ? ['The product name is not valid!'] : [])"
							prepend-icon="mdi-file-document-box-outline"
							label="Name"
							v-model="$v.name.$model"
						></v-text-field>
						<v-text-field prepend-icon="mdi-subtitles-outline" label="Description" v-model="description"></v-text-field>
						<v-row>
							<v-col class="d-flex" cols="12" sm="6">
								<v-text-field prepend-icon="mdi-currency-usd" label="Price" v-model="price"></v-text-field>
							</v-col>
							<v-col class="d-flex" cols="12" sm="6">
								<v-select :items="items" prepend-icon="mdi-calendar-month-outline" label="Period" v-model="period"></v-select>
							</v-col>
						</v-row>
						<v-text-field  prepend-icon="mdi-file-image-outline" label="Image" v-model="img"></v-text-field>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="success" type="submit" :disabled="$v.$error">Add product</v-btn>
					</v-card-actions>
				</v-card>
			</v-form>
		</v-content>
	</v-app>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {required, minLength} from 'vuelidate/lib/validators'

export default {
	data() {
		return {
			name: '',
			description: '',
			price: 0,
			img: '',
			period: '',
			items: [
				'monthly',
				'yearly'
			]
		}
	},
	validations: {
		name: {
			required,
			minLength: minLength(5)
		}
	},
	methods: {
		...mapActions(['createProduct']),
		onSubmitCreateProduct() {
			this.createProduct({
				name: this.name,
				description: this.description,
				price: this.price,
				img: this.img,
				period: this.period
			});

			this.$router.push({path: '/'});
		}
	}
};
</script>

<style scoped>

</style>