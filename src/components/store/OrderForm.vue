<template>
	<v-form @submit.prevent="onSubmitOrder">
		<v-card width="500" class="ma-10">
			<v-card-title>
				<h3>Order Form</h3>
			</v-card-title>
			<v-card-text>
				<v-row>
					<v-col class="d-flex" cols="12" sm="6">
						<v-text-field
							:rules="($v.firstName.$error ? ['Your First Name is not valid!'] : [])"
							label="First Name"
							v-model="$v.firstName.$model"
						></v-text-field>
					</v-col>
					<v-col class="d-flex" cols="12" sm="6">
						<v-text-field
							:rules="($v.lastName.$error ? ['Your Last Name is not valid!'] : [])"
							label="Last Name"
							v-model="$v.lastName.$model"
						></v-text-field>
					</v-col>
				</v-row>
				<h3>Billing Address</h3>
				<v-text-field label="Address" v-model="address"></v-text-field>
				<v-text-field label="Country" v-model="country"></v-text-field>
				<v-text-field label="City" v-model="city"></v-text-field>
				<v-text-field label="Zip" v-model="zip"></v-text-field>
			</v-card-text>
			<v-divider></v-divider>
			<v-card-actions>
				<v-btn color="info" type="submit" :disabled="$v.$error">Submit</v-btn>
			</v-card-actions>
		</v-card>
	</v-form>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {required, minLength} from 'vuelidate/lib/validators'

export default {
	name: 'OrderForm',
	data() {
		return {
			firstName: '',
			lastName: '',
			address: '',
			city: '',
			zip: '',
			country: ''
		}
	},
	validations: {
		firstName: {
			required,
			minLength: minLength(2)
		},
		lastName: {
			required,
			minLength: minLength(2)
		}
	},
	computed: {
		...mapGetters(['getCartProducts'])
	},
	methods: {
		...mapActions(['order']),
		onSubmitOrder() {
			let data = {
				firstName: this.firstName,
				lastName: this.lastName,
				address: this.address,
				city: this.city,
				zip: this.zip,
				country: this.country
			};
			this.order(data);
		}
	}
}
</script>

<style scoped>

</style>