import NavBar from '@/components/NavBar.vue';
<template>
	<div class="app-wrapper">
		<nav-bar></nav-bar>
		<main>
			<div class="px-3">
				<Nuxt> </Nuxt>
			</div>
		</main>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
	components: {
		NavBar,
	},
}
</script>
<style lang="scss">
.app-wrapper {
	html {
		box-sizing: border-box;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
}
</style>
e
