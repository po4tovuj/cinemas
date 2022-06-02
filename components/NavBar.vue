<template>
	<div>
		<b-navbar toggleable="lg" type="dark" class="nav-bar">
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

				<!-- Right aligned nav items -->
				<b-navbar-nav class="nav-list-wrapper ml-auto">
					<!-- filter -->
					<b-nav-item-dropdown class="nav-list mr-4" text="Genres" right>
						<b-dropdown-item>EN</b-dropdown-item>
						<b-dropdown-item>ES</b-dropdown-item>
						<b-dropdown-item>RU</b-dropdown-item>
						<b-dropdown-item>FA</b-dropdown-item>
					</b-nav-item-dropdown>
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

					<b-nav-item-dropdown class="nav-list" right>
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
<style>
.navbar-dark .navbar-nav .nav-link {
	color: #fff;
}

.navbar-dark .dropdown-toggle::after {
	vertical-align: 1px;
	margin-left: 0.5em;
}
</style>

<style lang="scss" scoped>
.nav-bar {
	background-color: rgba(47, 54, 74, 1);
	.nav-list-wrapper {
		.nav-list {
			&:focus,
			&:active {
				border: none;
				outline: none;
			}
		}
	}
	// .nav-list-wrapper .nav-item.nav-list {
	// 	.nav-link {
	// 		color: #fff;
	// 	}
	// }
}
</style>
