<template>
	<div class="upload">
		<zms-small-header />

		<zms-slide header="Upload">
			What are we going to upload?

			<zms-button :light="true" icon="image" text="Theme" @click="$router.navigate('upload/theme')" />
			<zms-button :light="true" icon="wrench" text="Plugin" @click="$router.navigate('upload/plugin')" />
		</zms-slide>
	</div>
</template>

<script type="text/javascript">
	import "vue-awesome/icons/image";
	import "vue-awesome/icons/wrench";

	export default {
		name: "upload"
	};
</script>