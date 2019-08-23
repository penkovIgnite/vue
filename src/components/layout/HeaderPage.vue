<template>
	<v-app-bar app>
		<v-toolbar-title class="headline text-uppercase">
			<span>Vuetify</span>
			<span class="font-weight-light">MATERIAL DESIGN</span>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn class="mr-2"><router-link :to="{path: '\products'}">Products</router-link></v-btn>
		<v-btn @click="onClickLogout">Logout</v-btn>
	</v-app-bar>
</template>

<script>
import {mapActions} from 'vuex'

export default {
	methods: {
		...mapActions(['logout']),
		onClickLogout() {
			this.logout();
		}
	}
};
</script>