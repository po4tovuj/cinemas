export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Movies',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/styles/_settings'],
	loaders: {
		scss: {
			implementation: require('sass'),
		},
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ['@/plugins/axios.js', '@/plugins/cinema.js', '@/plugins/imdb.js'],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: false,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://go.nuxtjs.dev/stylelint
		'@nuxtjs/stylelint-module',
		// for scss
		'@nuxtjs/style-resources',
	],
	styleResources: {
		scss: ['~assets/abstracts/_mixins.scss'],
		hoistUseStatements: true, // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		'bootstrap-vue/nuxt',
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/',
	},
	cinema: {
		baseURL: process.env.API_URL || '',
	},
	env: {
		API_KEY: process.env.API_KEY,
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
}
