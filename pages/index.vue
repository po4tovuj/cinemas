<template lang="Esp">
	<div class="movies-list-wrapper">
		<b-card-group tag="ul" class="movies-list">
			<!-- <div v-for="movie in movies" :key="movie._id" class="movie__item-wrapper"> -->
			<b-card
				v-for="movie in movies"
				:key="movie.id"
				class="movie__item"
				no-body
				tag="li"
			>
				<nuxt-link no-prefetch class="movie" :to="`/movies/${movie.id}`">
					<b-card-img
						:alt="movie.title || 'poster'"
						:src="movie.image"
						top
					>
					</b-card-img>
					
					<b-card-text class="movie__year">
						IMDb rating: {{movie.imDbRating}}, {{ movie.year }}
					</b-card-text>
					<b-card-title>
						{{ movie.title }}
					</b-card-title>
					<b-card-text> </b-card-text>
				</nuxt-link>
			</b-card>
			<!-- </div> -->
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
import { mapGetters } from 'vuex'
export default {
	name: 'IndexPage',
	// components: { HomePage },
	async asyncData({ store }) {
		if (!store.getters['movies/getMovies'].length) {
			store.dispatch('movies/handleIsLoading', true)
			await store
				.dispatch('movies/getMovies', { limit: 24 })
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
		}
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
		// debugger

		return { serials: [] }
	},

	data: () => ({
		serials: [],
	}),
	computed: {
		...mapGetters({
			movies: 'movies/getMovies',
		}),
	},

	methods: {
		goToMovie(id) {
			this.$router.push(`/movies/${id}`)
		},
	},
}
</script>
<style lang="scss" scoped>
.movies-list-wrapper {
	width: 1024px;
	margin: 0 auto;
}
.movies-list {
	padding: 20px 0;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-gap: 10px;

	& .movie {
		&__item {
			.card-body {
				padding: 0;
			}
			border: 0;

			&-wrapper {
			}
		}

		display: block;
		width: 100%;
		color: inherit;
		text-decoration: none;

		.card-img-top {
			width: 154px;
			height: 220px;
			box-shadow: 0 1px 4px 0 #000;
			overflow: hidden;
			border-radius: 3px;
			margin-bottom: 3px;
		}
		.card-title {
			margin-bottom: 4px;
			font-size: 14px;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
		&__year {
			color: #848484;
			font-size: 11px;
			margin: 0;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
	}
}
</style>
