<template>
	<div class="upload">
		<zms-small-header />

		<zms-slide header="Upload plugin">
			<div class="inputs">
				<input placeholder="Awesome Plugin">
				<textarea placeholder="This plugin will make your blog awesome by doing many awesome things!"></textarea>
				<input type="file">
				<zms-small-button icon="share-square" text="Submit" />
			</div>
			<div>
				First, make a plugin via the instructions in <a @click="$router.navigate('dev/plugin')">How to make a plugin</a> section. Give your plugin a name and enter a description. Then pack your plugin to ZIP archive and upload it.<br>
				<br>
				All plugins are verified by moderators: that is <a href="http://127.0.0.1:43110/Me.ZeroNetwork.bit/?Profile/1SunAWK2VUT9GQK32MpwRfFPVgcBSJN9a/1Cy3ntkN2GN9MH6EaW6eHpi4YoRS2nK5Di/gitcenter@zeroid.bit">@gitcenter</a>, <a href="http://127.0.0.1:43110/Me.ZeroNetwork.bit/?Profile/1RedkCkVaXuVXrqCMpoXQS29bwaqsuFdL/1J3rJ8ecnwH2EPYa6MrgZttBNc61ACFiCj/nofish@zeroid.bit">@nofish</a>, <a href="http://127.0.0.1:43110/Me.ZeroNetwork.bit/?Profile/12h51ug6CcntU2aiBjhP8Ns2e5VypbWWtv/12gAes6NzDS9E2q6Q1UXrpUdbPS6nvuBPu/krixano@zeroid.bit">@krixano</a>, <a href="http://127.0.0.1:43110/Me.ZeroNetwork.bit/?Profile/1oranGeS2xsKZ4jVsu9SVttzgkYXu4k9v/14K7EydgyeP84L1NKaAHBZTPQCev8BbqCy/glightstar@zeroid.bit">@glightstar</a> and <a href="http://127.0.0.1:43110/Me.ZeroNetwork.bit/?Profile/1oranGeS2xsKZ4jVsu9SVttzgkYXu4k9v/1AWwhg4EiWAVttfQboJZ4wJfX3WawfJT3h/binchan2@zeroid.bit">@binchan</a>. You (and others) will be able to use the plugin if it doesn't pass the validation or if we'll forget about it (sorry!), but it will be marked as UNVERIFIED.
			</div>
		</zms-slide>
	</div>
</template>

<style lang="sass">
	.inputs
		float: left
		margin-right: 32px
</style>

<script type="text/javascript">
	import "vue-awesome/icons/share-square";

	export default {
		name: "upload-plugin"
	};
</script>