export default function ({ $axios }, inject) {
	// Create a custom axios instance
	const imdb = $axios.create({})
	imdb.setBaseURL('https://imdb-api.com/en/API/')
	inject('IMBD_API', imdb)
}
