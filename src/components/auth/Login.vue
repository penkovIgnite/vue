<template>
	<v-app>
		<v-content>
			<v-form @submit.prevent="onSubmitLogin">
				<v-card width="400" class="mx-auto mt-5">
					<v-card-title>
						<h1>Login</h1>
					</v-card-title>
					<v-card-text>
						<v-text-field label="Username" v-model="username"></v-text-field>
						<v-text-field type="Password" label="Password" v-model="password"></v-text-field>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions>
						<v-btn color="success" :to="{path: 'register'}">Register</v-btn>
						<v-spacer></v-spacer>
						<v-btn color="info" type="submit">Login</v-btn>
					</v-card-actions>
				</v-card>
			</v-form>
		</v-content>
	</v-app>
</template>

<script>
import {mapMutation, mapActions} from 'vuex'

export default {
	data() {
		return {
			username: '',
			password: ''
		}
	},
	methods: {
		...mapActions(['login']),
		onSubmitLogin() {
			this.login({
				username: this.username,
				password: this.password
			})
		}
	}
};
</script>

<style scoped>

</style>