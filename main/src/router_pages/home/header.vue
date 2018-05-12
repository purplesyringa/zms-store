<template>
	<header>
		<div class="buttons">
			<zms-button icon="brands/github" text="Source Code" />
		</div>

		<h1>ZMS</h1>
		<h2>Zero Management System<br>First CMS for ZeroNet</h2>
	</header>
</template>

<style lang="sass" scoped>
	header
		box-sizing: border-box
		height: 100%
		background-color: #327ACE

		padding-top: calc(50vh - 216px)

	h1, h2
		margin: 0
		padding-left: 128px
		padding-top: 32px
		font-family: Lobster, Verdana, Arial, sans-serif

	h1
		font-size: 128px
		color: #FFF
	h2
		font-size: 64px
		color: rgba(255, 255, 255, 0.7)


	.buttons
		float: right
		margin-top: 64px
		margin-right: 128px
</style>

<script type="text/javascript">
	import "vue-awesome/icons/brands/github";

	export default {
		name: "zms-header"
	};
</script>