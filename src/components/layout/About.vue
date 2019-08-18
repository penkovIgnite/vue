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
				<v-btn color="danger" @click="onClickGetCollection">Collect</v-btn>
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
			onRegister() {
				const authString = btoa('kid_SkRxlwl4B:7edd20f766ac4a8d9dd716dd101b1755');
				axios.post('https://baas.kinvey.com/user/kid_SkRxlwl4B', {
					username: 'penkov',
					password: '123123',
					role: 'customer'
				}, {
					headers: {
						'Authorization': `Basic ${authString}`,
						'Content-Type': 'application/json'
					}
				}).then(res => {
					console.log(res);
				});
			},
			onLogin() {
				const authString = btoa('kid_SkRxlwl4B:7edd20f766ac4a8d9dd716dd101b1755');
				axios.post('https://baas.kinvey.com/user/kid_SkRxlwl4B/login', {
					username: 'guest',
					password: 'guest123'
				}, {
					headers: {
						'Authorization': `Basic ${authString}`,
						'Content-Type': 'application/json'
					}
				}).then(res => {
					console.log(res);
				});
			},
			onClickGetCollection() {
				const authString = btoa('kid_SkRxlwl4B:e27cdc8d6f50454a9906fecf20d995bc');
				axios.get('https://baas.kinvey.com/user/kid_SkRxlwl4B/Inventory', {
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