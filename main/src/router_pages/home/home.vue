<template>
	<div class="root">
		<zms-header />

		<zms-slide header="Themes">
			Choose any theme you like for your blog.
		</zms-slide>

		<zms-slide header="Plugins">
			Enchat your blog the way you like. Add comments, votes, "follow" button, integration with ZeroMe or whatever. With the use of plugins, you can even turn your blog into a public board.
		</zms-slide>

		<zms-slide header="Community">
			<i>Community is everything.</i> Themes and plugins are all made by the community for the community. Make your own plugin or theme and upload it to ZMS Store or help us by <a href="https://github.com/imachug/zms">developing ZMS</a>!
		</zms-slide>
	</div>
</template>

<style lang="sass" scoped>
	.root
		height: 100%
</style>

<script type="text/javascript">
	import Header from "./header.vue";
	import Slide from "./slide.vue";

	export default {
		name: "home",
		components: {
			"zms-header": Header,
			"zms-slide": Slide
		}
	};
</script>