import MoviesList from '~/components/MoviesList.vue';
<template>
	<div>
		<!-- <div class="iFrame-wrapper"> -->
		<b-modal
			ref="trailerModal"
			modal-class="myModal"
			hide-footer
			:title="`${movie.title} - Trailer`"
		>
			<div>
				<b-embed
					id="iFrame"
					:src="movie.trailer.linkEmbed"
					style="
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						width: 100%;
						height: 100%;
						border: none;
						margin: 0;
						padding: 0;
						overflow: hidden;
						z-index: 2;
					"
					allow="autoplay; fullscreen;"
					autoplay="1"
					mute="1"
				>
				</b-embed>
			</div>
		</b-modal>

		<!-- <b-btn> Close it</b-btn> -->
		<!-- </div> -->

		<b-card no-body class="overflow-hidden p-5">
			<b-row no-gutters>
				<b-col md-3>
					<div class="movie__poster-wrapper">
						<b-card-img
							class="movie__poster"
							height="569"
							:src="movie.image"
						></b-card-img>
						<div class="play-icon-wrapper" @click="openTrailer">
							<svg class="movie__play-icon">
								<use href="../../assets/play-button.svg#play-button"></use>
							</svg>
						</div>
					</div>
				</b-col>
				<b-col md="9">
					<b-card-body>
						<b-card-title title-tag="h1">
							{{ movie.title }}
						</b-card-title>
						<b-card-text>
							{{ movie.plot }}
						</b-card-text>
						<h2>Actors:</h2>
						<b-list-group class="actor-list">
							<b-list-group-item
								v-for="actor in actors"
								:key="actor.id"
								class="actor d-flex align-items-center"
							>
								<b-avatar
									variant="info"
									:src="actor.image"
									class="mr-3"
								></b-avatar>
								<div>
									<span class="actor__name"> {{ actor.name }} </span> as:
									<p>{{ actor.asCharacter }}</p>
								</div>
							</b-list-group-item>
						</b-list-group>
					</b-card-body>
				</b-col>
			</b-row>
		</b-card>
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
			return this.movie.actorList.slice(0, 5)
		},
	},
	methods: {
		openTrailer() {
			console.log('clicked')

			if (this.$refs?.trailerModal) {
				this.$refs.trailerModal.show()
			}
		},
	},
}
</script>
<style lang="scss">
.video-player-frame {
	width: 50px !important;
}
.myModal {
	.modal-dialog {
		max-width: 900px;
	}
}
// #trailer-modal .modal {
// 	padding: 0 !important;
// }
// #trailer-modal .modal-dialog {
// 	max-width: 900px;
// 	height: 60%;
// 	max-height: 100%;

// 	width: fit-content;

// 	margin: 0;
// }
.iFrame-wrapper {
	width: 100%;
	height: 100%;
	background-color: transparent;
	position: relative;
}
.movie {
	&__poster-wrapper {
		position: relative;
		.play-icon-wrapper {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border: 0 transparent;
			border-radius: 0;
			padding: 0;
			background-color: transparent;
			&:focus,
			:active {
				border: 0;
				border-radius: 0;
				background-color: inherit;
			}
		}
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
.actor {
	&__name {
		font-size: 16px;
		font-weight: bold;
	}
}
</style>
