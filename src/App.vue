<template>
	<div>
		<header-page></header-page>
		<router-view :error="error"></router-view>
		<footer-page></footer-page>
	</div>
</template>

<script>
import HeaderPage from '@/components/layout/HeaderPage'
import FooterPage from '@/components/layout/FooterPage'

import {AUTH_ERROR, SET_AUTH_USER} from '@/modules/auth/mutationsAuth'
import {ORDER} from '@/modules/store/mutationsStore'
import {GUEST} from '@/modules/auth/gettersAuth'

import {mapGetters, mapActions} from 'vuex'

export default {
	name: 'App',
	components: {
		HeaderPage,
		FooterPage
	},
	data: () => ({
		//
	}),
	computed: {
		...mapGetters({error: 'getAuthError'})
	},
	methods: {
		...mapActions(['fillAuthUser', 'removeError'])
	},
	created() {
		this.fillAuthUser();
	},
	updated() {
		this.$store.subscribe((mutation, state) => {
			if(mutation.type == AUTH_ERROR)
				this.getAuthError;
			if(mutation.type == SET_AUTH_USER && state.user.role != GUEST)
				this.$router.push({path: "/"}).catch(err => {});
			if(mutation.type == ORDER)
				this.$router.push({path: "/thank-you"}).catch(err => {});
		});
	}
};
</script>
