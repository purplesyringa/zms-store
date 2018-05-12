<template>
	<div class="slide">
		<header>{{header}}</header>
		<div class="content">
			<slot />
		</div>
	</div>
</template>

<style lang="sass" scoped>
	.slide
		margin: 32px 128px
		text-align: center

	header
		display: inline-block
		margin-bottom: 32px
		padding: 0 16px

		font-family: Lobster, Verdana, Arial, sans-serif
		font-size: 64px

		border-bottom: 1px solid #CCC

	.content
		display: block

		font-family: Verdana, Arial, sans-serif
		font-size: 16px
		text-align: left
</style>

<script type="text/javascript">
	export default {
		name: "zms-slide",
		props: ["header"]
	};
</script>