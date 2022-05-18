export const state = () => ({
	isLoading: false,
})
export const actions = {
	handleLoading({ commit }, val) {
		commit('handleLoading', val)
	},
}
export const mutations = {
	handleLoading({ state }, val) {
		state.isLoading = val
	},
}
export const getters = {
	isApiLoading: (state) => state.isLoading,
}
