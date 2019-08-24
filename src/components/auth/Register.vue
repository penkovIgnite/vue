<template>
	<v-app>
		<v-content>
			<v-form @submit.prevent="onSubmitRegister">
				<v-card width="400" class="mx-auto mt-5">
					<v-card-title>
						<h1>Register</h1>
					</v-card-title>
					<v-card-text>
						<v-text-field label="Username" v-model="username"></v-text-field>
						<v-text-field type="Password" label="Password" v-model="password"></v-text-field>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions>
						<v-btn color="success" :to="{path: 'login'}">Login</v-btn>
						<v-spacer></v-spacer>
						<v-btn color="info" type="submit">Register</v-btn>
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
			username: '',
			password: ''
		}
	},
	computed: {
		...mapGetters(['hasGuest'])
	},
	methods: {
		...mapActions(['register']),
		onSubmitRegister() {
			this.register({
				username: this.username,
				password: this.password
			})
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			if(!vm.hasGuest)
				vm.$router.push(from);
		});
	}
}
</script>

<style scoped>

</style>