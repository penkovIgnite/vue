<template>
	<v-app>
		<v-content>
			<v-alert width="800" v-if="error.length" dismissible type="error" class="mx-auto mt-3">
				{{error}}
			</v-alert>
			<v-form @submit.prevent="onSubmitRegister">
				<v-card width="400" class="mx-auto mt-5">
					<v-card-title>
						<h1>Register</h1>
					</v-card-title>
					<v-card-text>
						<v-text-field :rules="($v.username.$error ? ['Your username is not valid!'] : [])" label="Username" v-model="$v.username.$model"></v-text-field>
						<v-text-field :rules="($v.password.$error ? ['Your password is not valid!'] : [])" type="Password" label="Password" v-model="$v.password.$model"></v-text-field>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions>
						<v-btn color="success" :to="{path: 'login'}">Login</v-btn>
						<v-spacer></v-spacer>
						<v-btn color="info" type="submit" :disabled="$v.$error">Register</v-btn>
					</v-card-actions>
				</v-card>
			</v-form>
		</v-content>
	</v-app>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {required, minLength} from 'vuelidate/lib/validators'

import {CUSTOMER} from '@/modules/auth/gettersAuth'

export default {
	props: ['error'],
	data() {
		return {
			username: '',
			password: ''
		}
	},
	validations: {
		username: {
			required,
			minLength: minLength(4)
		},
		password: {
			required,
			minLength: minLength(6)
		}
	},
	computed: {
		...mapGetters(['hasGuest'])
	},
	methods: {
		...mapActions(['register', 'removeError']),
		onSubmitRegister() {
			this.register({
				username: this.username,
				password: this.password,
				role: CUSTOMER
			})
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			if(!vm.hasGuest)
				vm.$router.push(from);

			vm.removeError();
		});
	}
}
</script>

<style scoped>

</style>