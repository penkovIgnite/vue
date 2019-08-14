<template>
	<v-app>
		<v-card width="400" class="mx-auto mt-5">
			<v-card-title>
				<h1>Login</h1>
			</v-card-title>
			<v-card-text>
				<v-form>
					<v-text-field label="Username"></v-text-field>
					<v-text-field type="Password" label="Password"></v-text-field>
				</v-form>
			</v-card-text>
			<v-divider></v-divider>
			<v-card-actions>
				<v-btn color="success">Register</v-btn>
				<v-spacer></v-spacer>
				<v-btn color="info" @click="onLogin">Login</v-btn>
			</v-card-actions>
		</v-card>
	</v-app>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				name: 'Pesho'
			}
		},
		methods: {
			onLogin() {
				const authString = btoa('kid_SkRxlwl4B:7edd20f766ac4a8d9dd716dd101b1755');
				axios.post('https://baas.kinvey.com/user/kid_SkRxlwl4B', {
					username: 'Nanyo',
					password: '123123'
				}, {
					headers: {
						'Authorization': `Basic ${authString}`,
						'Content-Type': 'application/json'
					}
				}).then(res => {
					console.log(res);
				});
			}
		}
	}
</script>

<style scoped>

</style>