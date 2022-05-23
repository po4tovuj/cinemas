export const state = () => ({
	isLoading: false,

	movies: [],
	currentPage: 1,
	totalPages: 1,
	totalMoviesResults: 0,
	serials: [],
	favourites: [],
	genres: [],
})
export const getters = {
	isApiLoading: (state) => state.isLoading,

	getMovies: (state) => state.movies,
	getTotal: (state) => state.totalMoviesResults,
	getFavourite: (state) => {
		return state.movies.filter((movie) => movie.favourite)
	},
	getSerials: (state) => state.serials,
	getGenres: (state) => state.genres,
	getCurrentPage: (state) => state.currentPage,
}

export const actions = {
	handleIsLoading({ commit }, val) {
		commit('handleIsLoading', val)
	},
	getSerials({ commit }, { page = 1, limit = 20, genres = '' } = {}) {
		const params = new URLSearchParams()
		params.append('page', page)
		params.append('limit', limit)
		const options = {
			params,
		}
		return this.$cinema('episodes/', options)
			.then(({ data }) => {
				if (!data.success) {
					return { success: false, messageStatus: data.messageStatus }
				}
				commit('saveSerials', { data, currentPage: page })
				return {
					success: true,
					data,
				}
			})
			.catch((err) => {
				const message = err.messageStatus || 'Error! Failed on load movies'
				throw new Error(message)
			})
	},
	async getMovies({ commit }, { page = 1, limit = 20, genres = '' } = {}) {
		const params = new URLSearchParams()
		params.append('page', page)
		params.append('limit', limit)
		params.append('genres', genres)
		const options = {
			params,
		}
		return await this.$cinema('movies/', options)
			.then(({ data } = {}) => {
				if (!data.success) {
					return { success: false, messageStatus: data.messageStatus }
				}
				commit('saveMovies', { data, currentPage: page })
				return {
					success: true,
					movies: data.results,
				}
			})
			.catch((err) => {
				const message = err.messageStatus || 'Error! Failed on load movies'
				throw new Error(message)
			})
	},
	async getGenres({ commit }) {
		await await this.$cinema('genres/')
			.then(({ data }) => {
				if (!data.success) {
					return { success: false, messageStatus: data.messageStatus }
				}
				commit('saveGenres', data.results)
				return { success: true }
			})
			.catch((err) => {
				const message = err.messageStatus || 'Error! Failed on load genres'
				throw message
			})
	},
	addToFavourites() {},
	removeFromFavourites() {},
}
export const mutations = {
	handleIsLoading(state, val) {
		state.isLoading = val
	},
	changeCurrentPage(state, page) {
		state.currentPage = page
	},
	saveMovies(state, { data, currentPage }) {
		const {
			total_pages: totalPages = 1,
			results: movies = [],
			total_results: totalMoviesResults = 0,
		} = data
		state.movies = movies
		state.currentPage = currentPage
		state.totalPages = totalPages
		state.totalMoviesResults = totalMoviesResults
	},
	saveSerials(state, { data = {} }) {
		state.serials = data.results
	},
	// saveGenres(state, genres) {
	// 	// state.genres = genres
	// },
	addToFavourites(state, cinema) {
		state.favourites.push(cinema)
	},

	// removeFromFavourites(state, id) {},
}
