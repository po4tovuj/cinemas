<template>
	<div>
		<movies-list></movies-list>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import MoviesList from '~/components/MoviesList.vue'

export default {
	components: { MoviesList },
	computed: {
		...mapGetters({
			getMovies: 'movies/getMovies',
		}),
	},
}
</script>
