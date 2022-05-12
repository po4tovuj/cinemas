export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const cinema = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
      'X-RapidAPI-Key': '9fda2df91dmsha0f6b3006073e61p16f12bjsn64c40ca98678',
    },
  })
  // Set baseURL to something different
  //   cinema.setBaseURL('https://movies-app1.p.rapidapi.com/api/')
  //   set Headers for the api

  // Inject to context as $api
  inject('cinema', cinema)
}
