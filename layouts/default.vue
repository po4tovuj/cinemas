import NavBar from '@/components/NavBar.vue';
<template>
	<div>
		<nav-bar></nav-bar>
		
		<main>
			<div class="px-3">
				<nuxt> </nuxt>
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
