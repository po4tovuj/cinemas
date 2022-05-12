<template>
  <div>
    <h1>Choose your favourite film</h1>
    <films-list></films-list>
  </div>
</template>
<script>
import FilmsList from '~/components/FilmsList.vue'

export default {
  components: { FilmsList },
  //  asyncData({ store }) {
  //   debugger
  //   store
  //     .dispatch('films/getFilms')
  //     .then(() => {
  //       // console.log('result', store.state.films)
  //     })
  //     .catch((err) => {
  //       throw new Error(err)
  //     })
  // }
}
</script>
<!-- <style lang="scss" scoped></style> -->
