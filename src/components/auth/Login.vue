<template>
	<v-app>
		<v-content>
			<v-alert width="800" v-if="error.length" dismissible type="error" class="mx-auto mt-3">
				{{error}}
			</v-alert>
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
						<v-btn color="info" type="submit" :loading="loading" :disabled="disabled">Login</v-btn>
					</v-card-actions>
				</v-card>
			</v-form>
		</v-content>
	</v-app>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
	props: ['error'],
	data() {
		return {
			location: '',
			username: '',
			password: '',
			loading: false,
			disabled: false
		}
	},
	computed: {
		...mapGetters(['hasGuest'])
	},
	methods: {
		...mapActions(['login', 'removeError']),
		onSubmitLogin() {
			this.loading = true;
			this.disabled = true;

			this.login({
				username: this.username,
				password: this.password
			})
		}
	},
	created() {
		this.location = this.$route.query.location
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			if(vm.hasGuest && vm.location == 'cart') {
				vm.$router.push({path: '/checkout'}).catch(err => {});
			} else if(!vm.hasGuest) {
				vm.$router.push(from).catch(err => {});
			}

			vm.removeError();
		});
	}
};
</script>

<style scoped>

</style>