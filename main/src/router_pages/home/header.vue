<template>
	<div class="header-container">
		<header>
			<h1>ZMS</h1>
			<h2>Zero Management System<br>First CMS for ZeroNet</h2>

			<div class="buttons">
				<zms-button icon="brands/github" text="Source Code" @click="go('https://github.com/imachug/zms')" />
				<zms-button icon="comment-alt" text="Create a blog" />
				<zms-button icon="upload" text="Upload theme/plugin" @click="$router.navigate('upload')" />
			</div>
		</header>
	</div>
</template>

<style lang="sass" scoped>
	@import "../../sass/media.sass"

	.header-container
		width: 100%
		background-color: #327ACE
		padding-top: calc(50vh - 216px)

		@include apply-to(greater-than, $laptop)
			padding-top: 128px
			padding-bottom: 160px
		@include apply-to(less-than, $phone)
			padding-top: 0

	header
		box-sizing: border-box
		max-width: 1280px
		height: 100vh

		margin: 0 auto

		position: relative

		@include apply-to(greater-than, $laptop)
			height: auto

		@include apply-to(less-than, 1280px - 1px)
			height: auto
			padding-bottom: 64px




	h1, h2
		margin: 0
		padding-left: 5%
		padding-top: 32px
		font-family: Lobster, Verdana, Arial, sans-serif

	h1
		font-size: 128px
		color: #FFF
		@include apply-to(less-than, $phone)
			font-size: 64px

	h2
		display: inline-block
		font-size: 60px
		color: #FFF
		opacity: 0.7
		@include apply-to(less-than, $phone)
			font-size: 30px


	.buttons
		position: absolute
		top: 64px
		right: 5%

		@include apply-to(less-than, 1280px - 1px)
			position: static
			top: 0
			right: 0

			width: 420px
			max-width: 100%
			margin: 0 auto
</style>

<script type="text/javascript">
	import "vue-awesome/icons/brands/github";
	import "vue-awesome/icons/comment-alt";
	import "vue-awesome/icons/upload";

	export default {
		name: "zms-header",

		methods: {
			go(url) {
				window.top.location.href = url;
			}
		}
	};
</script>