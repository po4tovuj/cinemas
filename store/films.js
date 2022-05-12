export const state = () => ({
  films: [],
  currentPage: 1,
  totalPages: 1,
  totalFilmsResults: 0,
  favourites: [],
})
export const getters = {
  getFilms: (state) => state.films,
  getFavourite: (state) => {
    return state.films.filter((cinema) => cinema.favourite)
  },
}

export const actions = {
  async getFilms({ commit }, { page = 1, limit = 6 } = {}) {
    const params = new URLSearchParams()
    params.append('page', page)
    params.append('limit', limit)
    const options = {
      params,
    }
    const { data } = await this.$cinema('movies/', options)

    commit('saveFilms', { data, currentPage: page })
  },
  addToFavourites() {},
  removeFromFavourites() {},
}
export const mutations = {
  saveFilms(state, { data, currentPage }) {
    const {
      total_pages: totalPages = 1,
      results: films = [],
      total_results: totalFilmsResults = 0,
    } = data
    state.films.push(films)
    state.currentPage = currentPage
    state.totalPages = totalPages
    state.totalFilmsResults = totalFilmsResults
  },
  addToFavourites(state, cinema) {
    state.favourites.push(cinema)
  },

  removeFromFavourites(state, id) {},
}
