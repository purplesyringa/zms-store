<template>
	<div class="upload">
		<zms-small-header />

		<zms-slide header="Themes">
			<h2>{{theme.title}} <i>by {{theme.cert_user_id}}</i></h2>
			<div>To install a theme, open <b>Store</b> tab in your blog's admin panel</div>

			<div class="icons">
				<div>
					<zms-small-button icon="file-archive" text="Download as ZIP" @click="downloadAsZip()" />
				</div>

				<div class="verified not-verified">
					UNVERIFIED
				</div>
			</div>

			<img :src="theme.screenshot">
		</zms-slide>
	</div>
</template>

<style lang="sass" scoped>
	img
		width: 100%
		box-shadow: 0 4px 4px #CCC
		border-radius: 4px

	h2 i
		font-weight: normal
		color: #444


	.icons
		float: right
		margin-top: -58px
		margin-bottom: 32px
	.icons > *
		display: inline-block
		margin-left: 16px
		vertical-align: top

	.verified
		display: inline-block
		padding: 12px
		height: 21px

		background-color: #080
		color: #FFF

		border-radius: 4px
		box-shadow: 0 4px 4px #CCC

	.not-verified
		background-color: #800
</style>

<script type="text/javascript">
	import Themes from "../../libs/themes.js";
	import "vue-awesome/icons/file-archive";

	export default {
		name: "view-theme",
		data() {
			return {
			};
		},

		asyncComputed: {
			theme: {
				async get() {
					const {address, title} = this.$router.currentParams;
					return await Themes.get(address, title);
				},
				default: {
					title: "",
					screenshot: "",
					zip: "",
					cert_user_id: ""
				}
			}
		},

		methods: {
			downloadAsZip() {
				top.location.href = this.theme.zip;
			}
		}
	};
</script>