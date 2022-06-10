<template>
	<div class="movie-wrapper">
		<header>
			<h1>{{ movie.title }}</h1>
		</header>
		<b-card no-body class="movie__card overflow-hidden">
			<aside class="left-panel">
				<b-img-lazy
					class="movie__poster"
					blank-color="lightgray"
					:src="movie.image"
				></b-img-lazy>
				<p class="imdb-rate">
					<svg width="50" height="50" class="icon-rate">
						<use href="../../assets/icons/icons.svg#icon-imdb"></use>
					</svg>
					{{ movie.imDbRating }}
				</p>
				<ul class="info-list">
					<li class="info-list__item info-item">
						<span class="info-item__title">Year: </span>
						<span class="info-item__text">{{ movie.year }}</span>
					</li>
					<li class="info-list__item info-item">
						<span class="info-item__title">Country: </span>
						<span class="info-item__text">
							{{ movie.countries }}
						</span>
					</li>
					<li class="info-list__item info-item">
						<span class="info-item__title">Genre:</span>
						<span class="info-item__text">
							{{ movie.genres }}
						</span>
					</li>
					<li class="info-list__item info-item">
						<span class="info-item__title">Runtime:</span>
						<span class="info-item__text">
							{{ movie.runtimeStr }}
						</span>
					</li>
				</ul>
			</aside>

			<b-card-body>
				<div>
					<b-embed
						id="iFrame"
						:src="movie.trailer.linkEmbed"
						style="
							width: 100%;
							height: 100%;
							border: none;
							margin: 0;
							padding: 0;
							overflow: hidden;
						"
					>
					</b-embed>
				</div>

				<b-card-text class="mt-4">
					<span class="description-title"> Story: </span> {{ movie.plot }}
				</b-card-text>

				<h2 style="display: none"></h2>
				<h4 class="some-styles">Actors:</h4>
				<ul class="actors-list">
					<li v-for="actor in actors" :key="actor.id" class="actor">
						<b-img width="65" height="90" :src="actor.image" class="mr-3">
							{{ actor.asCharacter }}
						</b-img>
						<!-- <div class="actor-info"> -->
						<p class="actor__name">{{ actor.name }}</p>
						<!-- 							
							<p class="actor__character">{{ actor.asCharacter }}</p>
						</div> -->
					</li>
				</ul>
			</b-card-body>
		</b-card>
		<footer class="footer">
			<h3>Similar:</h3>
			<ul class="similar-list">
				<li v-for="similar in similars" :key="similar.id" class="similar-item">
					<nuxt-link :to="`/movies/${similar.id}`">
						<b-img
							class="similar-item__img"
							:src="similar.image"
							:alt="similar.title"
						></b-img>
						<p class="similar-item__title">
							{{ similar.title }}
						</p>
					</nuxt-link>
				</li>
			</ul>
		</footer>
	</div>
	<!-- <div>this is id{{ id }}</div> -->
</template>
<script>
export default {
	async asyncData({ store, params }) {
		const { id } = params

		const { movie = {} } = await store.dispatch('movies/getSingleMovie', {
			id,
		})
		// console.log('🚀 ~ file: _id.vue ~ line 12 ~ asyncData ~ data', movie)
		return { movie }
	},
	data() {
		return {
			// movie: {},
			// id: this.$route.params.id,
		}
	},
	computed: {
		actors() {
			return this.movie.actorList.slice(0, 9)
		},
		similars() {
			return this.movie.similars.slice(0, 5)
		},
	},
}
</script>
<style lang="scss">
.iFrame-wrapper {
	width: 100%;
	height: 100%;
	background-color: transparent;
	position: relative;
}

.movie {
	&-wrapper {
		width: 1200px;
		margin: 0 auto;
		padding-bottom: 40px;
		.description-title {
			font-weight: 700;
		}
	}

	&__card {
		padding-bottom: 24px;
		border: 0;
		display: flex;
		flex-direction: row;
		.imdb-rate {
			padding: 8px 0;
			overflow: hidden;
			display: flex;
			align-items: center;
			position: relative;
			&::after {
				content: '';
				position: absolute;
				height: 1px;
				left: 0;
				bottom: 8px;
				border-bottom: 1px dashed rgba(0, 0, 0, 0.3);
				width: 100%;
			}
		}
		.icon-rate {
			margin-right: 20px;
		}
		.info-item {
			display: flex;
			justify-content: space-between;
			&__title {
				font-weight: 700;
			}
			&__text {
				color: rgba(0, 0, 0, 0.5);
			}
			&:not(:last-child) {
				margin-bottom: 8px;
			}
		}
	}

	&__poster {
		width: 261px;
		height: 385px;
	}
	&__play-icon {
		opacity: 0.3;
		fill: lightgray;
		width: 150px;
		cursor: pointer;
		&:hover {
			transform: scale(1.1);
		}
	}
}
.actors-list {
	display: flex;

	.actor {
		max-width: 65px;
		&:not(:last-child) {
			margin-right: 10px;
		}
		&__name {
			font-size: 11px;
			line-height: 1.1em;
			font-weight: bold;
			margin-top: 8px;
		}
		&__character {
			margin-bottom: 0;
		}
	}
}
.similar-list {
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr;
	.similar-item {
		&__img {
			width: 100%;
			height: calc(100% - 24px);
		}
		&__title {
			color: black;
		}
	}
}
@include tablet-screen() {
	.card-body {
		padding-top: 0;
		.card-title {
			margin-top: 0;
		}
	}

	.similar-list {
		grid-template-columns: repeat(3, 150px);
	}
	.actors-list {
		.actor {
			// flex-basis: calc(100% / 2 - 20px);
		}
	}
}
@include large-screen {
	.card-body {
		padding-top: 0;
		.card-title {
			margin-top: 0;
		}
	}
	.similar-list {
		grid-template-columns: repeat(5, 150px);
	}
	.actors-list {
		// .actor {
		// 	flex-basis: calc(100% / 3 - 20px);
		// }
	}
}
</style>
