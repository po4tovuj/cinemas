<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="info">
			<b-navbar-brand href="/">Cinema Watch</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<nuxt-link exact active-class="active" class="nav-link" to="/"
						>Home</nuxt-link
					>
					<nuxt-link
						active-class="active"
						class="nav-link"
						to="/favoritesList"
						no-prefetch
					>
						Favorites
					</nuxt-link>
				</b-navbar-nav>
				<!-- filter -->
				<b-nav-item-dropdown text="Genres" right>
					<b-dropdown-item href="#">EN</b-dropdown-item>
					<b-dropdown-item href="#">ES</b-dropdown-item>
					<b-dropdown-item href="#">RU</b-dropdown-item>
					<b-dropdown-item href="#">FA</b-dropdown-item>
				</b-nav-item-dropdown>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-form>
						<b-form-input
							size="sm"
							class="mr-sm-2"
							placeholder="Search"
						></b-form-input>
						<b-button size="sm" class="my-2 my-sm-0" type="submit"
							>Search</b-button
						>
					</b-nav-form>

					<b-nav-item-dropdown right>
						<!-- Using 'button-content' slot -->
						<template #button-content>
							<em>User</em>
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="#">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped></style>
