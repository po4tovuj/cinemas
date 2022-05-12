// export default function ({ $axios, $auth, redirect, store }, inject) {

export default function ({ $axios, redirect }, inject) {
  // const FilmsApi = $axios.create({
  //   baseUrl: 'https://movies-app1.p.rapidapi.com/api/',
  // })

  // FilmsApi.setBaseUrl('https://movies-app1.p.rapidapi.com/api/')

  //   inject('postsApi', postsApi)

  //         const FilmsApi = $axios.create()

  //   FilmsApi.setBaseUrl(process.env.API_URL || 'http://localhost:3000')
  // inject('cinema', FilmsApi)
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
