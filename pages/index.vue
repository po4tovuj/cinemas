<template>
	<div class="container">
		<b-card-group tag="ul" class="movies-list d-flex flex-wrap">
			<b-card
				v-for="movie in movies"
				:key="movie.id"
				class="movies-list__item w-25 p-4 mb-2"
				:title="movie.originalTitle"
				:img-src="movie.image"
				:img-alt="movie.titleOriginal || 'poster'"
				img-top
				img-width="100%"
				tag="li"
			>
				<b-card-text>
					{{ movie.year }}, {{ parseCountries(movie) }}
				</b-card-text>

				<b-button href="#" variant="primary">Go somewhere</b-button>
			</b-card>
		</b-card-group>
		<ul class="list">
			<li v-for="serial in serials" :key="serial.id">
				<div class="card">
					<div class="card-body">
						<h4 class="card-title">{{ serial.serie.titleOriginal }}</h4>
						<h6 class="card-subtitle text-muted">
							{{
								`Season: ${serial.serie.season}, Episode: ${serial.serie.epizode}`
							}}
						</h6>
					</div>
					<img :src="serial.serie.image" alt="Poster" class="mb-2" />
					<div class="card-body">
						<p class="card-text">Text</p>
						<!-- <a href="#" class="card-link">Link 1</a>
					<a href="#" class="card-link">Link 2</a> -->
					</div>
				</div>

				<b-card-text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</b-card-text>

				<b-button href="#" variant="primary">Go somewhere</b-button>
			</li>
		</ul>
	</div>
</template>

<script>
// import HomePage from './HomePage.vue'
export default {
	name: 'IndexPage',
	// components: { HomePage },
	async asyncData({ store }) {
		// let movies = store.state.movies.movies || []
		// let serials = store.state.movies.serials || []
		// if (!movies.length) {
		store.dispatch('movies/handleIsLoading', true)
		const { movies = [] } = await store
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

				store.dispatch('movies/handleIsLoading', false)

				return result
			})
			.catch((err) => {
				store.dispatch('movies/handleIsLoading', false)
				store._vm.$bvToast.toast(`${err.message || ''}`, {
					title: "Can't load the moviess!",
					variant: 'danger',
					toaster: 'b-toaster-top-center',
					solid: true,
				})
				return {}
			})

		// if (!serials.length) {
		// 	await store
		// 		.dispatch('movies/getSerials', { limit: 8 })
		// 		.then((result) => {
		// 			if (!result.success) {
		// 				store._vm.$bvToast.toast(`${result.messageStatus || ''}`, {
		// 					title: "Can't load the trailers!",
		// 					variant: 'danger',
		// 					toaster: 'b-toaster-top-center',
		// 					autoHideDelay: 200,

		// 					solid: true,
		// 				})
		// 			}
		// 			store.dispatch('movies/handleIsLoading', false)
		// 		})
		// 		.catch((err) => {
		// 			store.dispatch('movies/handleIsLoading', false)
		// 			store._vm.$bvToast.toast(`${err.message || ''}`, {
		// 				title: "Can't load the trailers!",
		// 				variant: 'danger',
		// 				toaster: 'b-toaster-top-center',
		// 				solid: true,
		// 			})
		// 		})
		// } else {
		// 	serials = serials.slice(0, 7)
		// }
		debugger

		return { movies, serials: [] }
	},
	data: () => ({
		movies: [],
		serials: [],
	}),
	methods: {
		parseCountries(movie) {
			return movie.countries.map((country) => country.name).join(',')
		},
	},
}
</script>
<style lang="scss" scoped>
.movies-list {
	&__item {
		width: 25%;
	}
}
</style>
