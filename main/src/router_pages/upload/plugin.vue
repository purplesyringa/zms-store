<template>
	<div class="upload">
		<zms-small-header />

		<zms-slide header="Upload plugin">
			<div class="inputs">
				<input placeholder="Awesome Plugin" v-model="title" :class="{error: title === 'Please fill in title'}">
				<textarea placeholder="This plugin will make your blog awesome by doing many awesome things!" v-model="description" :class="{error: description === 'Please fill in description'}"></textarea>
				<zms-file-input placeholder="ZIP archive" :error="fileError" v-model="file" ref="file" />
				<zms-small-button icon="share-square" text="Upload" @click="upload" />
			</div>
			<div>
				First, make a plugin via the instructions in <a @click="$router.navigate('dev/plugin')">How to make a plugin</a> section. Give your plugin a name and enter a description. Then pack your plugin to ZIP archive and upload it.<br>
				<br>
				All plugins are verified by moderators: that is <a href="http://127.0.0.1:43110/Me.ZeroNetwork.bit/?Profile/1SunAWK2VUT9GQK32MpwRfFPVgcBSJN9a/1Cy3ntkN2GN9MH6EaW6eHpi4YoRS2nK5Di/gitcenter@zeroid.bit">@gitcenter</a>, <a href="http://127.0.0.1:43110/Me.ZeroNetwork.bit/?Profile/1RedkCkVaXuVXrqCMpoXQS29bwaqsuFdL/1J3rJ8ecnwH2EPYa6MrgZttBNc61ACFiCj/nofish@zeroid.bit">@nofish</a>, <a href="http://127.0.0.1:43110/Me.ZeroNetwork.bit/?Profile/12h51ug6CcntU2aiBjhP8Ns2e5VypbWWtv/12gAes6NzDS9E2q6Q1UXrpUdbPS6nvuBPu/krixano@zeroid.bit">@krixano</a>, <a href="http://127.0.0.1:43110/Me.ZeroNetwork.bit/?Profile/1oranGeS2xsKZ4jVsu9SVttzgkYXu4k9v/14K7EydgyeP84L1NKaAHBZTPQCev8BbqCy/glightstar@zeroid.bit">@glightstar</a> and <a href="http://127.0.0.1:43110/Me.ZeroNetwork.bit/?Profile/1oranGeS2xsKZ4jVsu9SVttzgkYXu4k9v/1AWwhg4EiWAVttfQboJZ4wJfX3WawfJT3h/binchan2@zeroid.bit">@binchan</a>. You (and others) will be able to use the plugin if it doesn't pass the validation or if we'll forget about it (sorry!), but it will be marked as NOT YET VERIFIED.<br>
				<br>
				When you add some more features to your plugin, upload it once again with the same settings. The old plugin will be replaced with the new one and the users will get an offer to update the plugin. <i>Notice: the new version of the plugin must be verified by the moderators again.</i>
			</div>
		</zms-slide>
	</div>
</template>

<style lang="sass" scoped>
	.inputs
		float: left
		margin-right: 32px

	.error
		color: #CE3232
</style>

<script type="text/javascript">
	import "vue-awesome/icons/share-square";

	export default {
		name: "upload-plugin",
		data() {
			return {
				title: "",
				description: "",
				file: null,
				fileError: ""
			};
		},

		methods: {
			upload() {
				let error = false;
				if(!this.title || this.title === "Please fill in title") {
					this.title = "Please fill in title";
					error = true;
				}
				if(!this.description || this.description === "Please fill in description") {
					this.description = "Please fill in description";
					error = true;
				}
				if(!this.file) {
					this.fileError = "Please choose ZIP";
					error = true;
				}
				if(this.file && this.file.type !== "application/x-zip-compressed") {
					this.$refs.file.$emit("error", "Please choose ZIP archive, not " + (this.file.type || "plain/text"));
					error = true;
				}
				if(error) {
					return;
				}

				console.log(this.title, this.description, this.file);
			}
		}
	};
</script>