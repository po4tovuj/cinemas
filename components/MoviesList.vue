<template>
	<div>
		<b-row class="">
			<b-col v-for="movie in moviesList" :key="movie.id" cols="3">
				<b-card tag="div" class="mb-2">
					<b-img-lazy
						:src="movie.image"
						alt="Image"
						class=""
						width="300"
						height="450"
						blank-src="~/assets/spiner.gif"
						center
					></b-img-lazy>

					<b-card-body>
						<h2 class="card-title">{{ movie.originalTitle }}</h2>
						<b-card-text class="movie__description">
							{{ movie.description }}
						</b-card-text>
					</b-card-body>
					<b-button href="#" variant="primary">Go somewhere</b-button>
				</b-card>
			</b-col>
		</b-row>
		<div v-if="totalItems" class="pagination">
			<b-pagination
				:disabled="isApiLoading"
				:value="currentPage"
				:total-rows="totalItems"
				:per-page="itemsPerPage"
				first-number
				last-number
				@page-click="changePage"
			></b-pagination>
		</div>
	</div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
	props: {
		movies: {
			type: Object,
			default: () => ({}),
		},
	},
	data() {
		return {
			// currentPage: 1,
			itemsPerPage: 20,
		}
	},
	computed: {
		...mapGetters({
			moviesList: 'movies/getMovies',
			totalItems: 'movies/getTotal',
			currentPage: 'movies/getCurrentPage',
			isApiLoading: 'movies/isApiLoading',
		}),
	},
	methods: {
		...mapActions({
			getMovies: 'movies/getMovies',
			handleIsLoading: 'movies/handleIsLoading',
		}),
		...mapMutations({
			changeCurrentPage: 'movies/changeCurrentPage',
		}),

		changePage(bvEvent, page) {
			if (this.isApiLoading) {
				bvEvent.preventDefault()
				return
			}
			this.handleIsLoading(true)
			bvEvent.preventDefault()

			this.getMovies({ page })
				.then((res) => {
					if (!res.succsess) {
						throw res
					}
					// this.currentPage = page
					this.changeCurrentPage(page)
					this.handleIsLoading(false)
				})
				.catch((err) => {
					this.handleIsLoading(false)
					this.$bvToast.toast(`${err.messageStatus || ''}`, {
						title: "Can't load the page!",
						variant: 'danger',
						toaster: 'b-toaster-top-center',
						autoHideDelay: 200,

						solid: true,
					})

					// this.currentPage = this.getCurrentPage
				})
		},
	},
}
</script>
<style lang="scss">
// .pagination {
.page-item {
	// &.active {
	.page-link,
	.page-link:focus {
		border-color: #dee2e6;
		box-shadow: none !important;
		outline: 0;
	}
	// }
}
// }
</style>
<style lang="scss" scoped>
.movie__description {
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
}
.page-item.active .page-link {
	// border-color: #dee2e6;
}
.pagination {
	justify-content: center;
	padding: 16px 0;
}
</style>
