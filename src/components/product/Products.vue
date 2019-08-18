<template>
	<div>

	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters([getAuthToken])
	},
	create() {
		console.log(this.getAuthToken)
	}
}
</script>

<style>

</style>