<template>
	<div>
		<header-page></header-page>
		<router-view></router-view>
		<footer-page></footer-page>
	</div>
</template>

<script>
import HeaderPage from '@/components/layout/HeaderPage'
import FooterPage from '@/components/layout/FooterPage'

import {mapActions} from 'vuex'

export default {
	name: 'App',
	components: {
		HeaderPage,
		FooterPage
	},
	data: () => ({
		//
	}),
	methods: {
		...mapActions(['fillAuthToken'])
	},
	created() {
		this.fillAuthToken();
	}
};
</script>
