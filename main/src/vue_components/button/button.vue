<template>
	<button class="btn" @click="$emit('click')">
		<icon :name="icon" class="icon" />
		{{text}}
	</button>
</template>

<style lang="sass" scoped>
	$color: darken(#327ACE, 5%)

	.btn
		border: none
		font-family: Verdana, Arial, sans-serif
		font-size: 20px
		cursor: pointer
		display: inline-block
		margin: 15px 30px
		letter-spacing: 1px
		font-weight: 700
		outline: none
		position: relative
		transition: all 0.3s

		background: $color
		color: rgba(255, 255, 255, 0.8)
		border-radius: 7px
		box-shadow: 0 5px darken($color, 5%)
		padding: 25px 60px 25px 120px

	.btn:hover
		box-shadow: 0 2px darken($color, 5%)
		margin-top: 18px

	.btn:active
		background: lighten($color, 2%)

	.icon
		position: absolute
		left: 5%
		top: 25%
		width: 40%
		height: 50%
		color: rgba(0, 0, 0, 0.2)
</style>

<script type="text/javascript">
	export default {
		name: "zms-button",
		props: ["text", "icon"]
	};
</script>