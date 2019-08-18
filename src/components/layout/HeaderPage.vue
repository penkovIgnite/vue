<template>
	<v-app-bar app>
		<v-toolbar-title class="headline text-uppercase">
			<span>Vuetify</span>
			<span class="font-weight-light">MATERIAL DESIGN</span>
		</v-toolbar-title>
		<v-spacer></v-spacer>
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