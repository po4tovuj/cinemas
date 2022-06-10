<template lang="en">
    <div>
        <h1>
            hello actor
        </h1>
    </div>
</template>
<script>
export default {
	async asyncData({ params, store }) {
		const { id } = params

		const actor = await store.dispatch('movies/getActor', id).then((result) => {
			console.log('result: ', result)
			return result
		})
		return { actor }
	},
}
</script>
<style scoped lang="scss"></style>
