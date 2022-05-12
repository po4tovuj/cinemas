<template>
  <div>
    <home-page> </home-page>
  </div>
</template>

<script>
import HomePage from './HomePage.vue'
export default {
  name: 'IndexPage',
  components: { HomePage },
  asyncData({ store }) {
    debugger
    store
      .dispatch('films/getFilms')
      .then(() => {
        // console.log('result', store.state.films)
      })
      .catch((err) => {
        throw new Error(err)
      })
  },
}
</script>
