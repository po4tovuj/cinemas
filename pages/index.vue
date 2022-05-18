<template>
	<div></div>
</template>

<script>
// import HomePage from './HomePage.vue'
export default {
	name: 'IndexPage',
	// components: { HomePage },
	async fetch({ store }) {
		if (store.getters['movies/getMovies'].length === 0) {
			store.dispatch('handleIsLoading', true)
			await store
				.dispatch('movies/getMovies', { limit: 8 })
				.then((result) => {
					if (!result.success) {
						store._vm.$bvToast.toast(`${result.messageStatus || ''}`, {
							title: "Can't load the page!",
							variant: 'danger',
							toaster: 'b-toaster-top-center',
							autoHideDelay: 200,

							solid: true,
						})
					}
					store.dispatch('handleIsLoading', false)
				})
				.catch((err) => {
					store.dispatch('handleIsLoading', false)
					store._vm.$bvToast.toast(`${err.message || ''}`, {
						title: "Can't load the moviess!",
						variant: 'danger',
						toaster: 'b-toaster-top-center',
						solid: true,
					})
				})
			await store
				.dispatch('getTrailers', { limit: 8 })
				.then((result) => {
					if (!result.success) {
						store._vm.$bvToast.toast(`${result.messageStatus || ''}`, {
							title: "Can't load the trailers!",
							variant: 'danger',
							toaster: 'b-toaster-top-center',
							autoHideDelay: 200,

							solid: true,
						})
					}
					store.dispatch('handleIsLoading', false)
				})
				.catch((err) => {
					store.dispatch('handleIsLoading', false)
					store._vm.$bvToast.toast(`${err.message || ''}`, {
						title: "Can't load the trailers!",
						variant: 'danger',
						toaster: 'b-toaster-top-center',
						solid: true,
					})
				})
		}
	},
}
</script>
