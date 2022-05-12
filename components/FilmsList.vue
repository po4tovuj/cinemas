<template>
  <div>
    <b-card
      v-for="film in filmsList"
      :key="film.id"
      no-body
      class="overflow-hidden"
      style="max-width: 540px"
    >
      <b-row no-gutters>
        <b-col md="6">
          <b-img-lazy
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class=""
            blank-src="/Spinner-1s-200px.gift"
          ></b-img-lazy>
        </b-col>
        <b-col md="6">
          <b-card-body title="Horizontal Card">
            <b-card-text>
              This is a wider card with supporting text as a natural lead-in to
              additional content. This content is a little bit longer.
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <div v-if="totalItems">
      <b-pagination
        v-model="currentPage"
        :total-rows="totalItems"
        :per-page="itemsPerPage"
        first-number
        last-number
      ></b-pagination>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    films: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 20,
    }
  },
  computed: {
    ...mapGetters({
      filmsList: 'films/getFilms',
    }),
    totalItems() {
      return this.filmsList.length
    },
  },
}
</script>
