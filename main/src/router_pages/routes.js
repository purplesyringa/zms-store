import Home from "./home/home.vue";
import Upload from "./upload/upload.vue";
import UploadPlugin from "./upload/plugin.vue";
import UploadTheme from "./upload/theme.vue";

export default vue => [
	{
		path: "",
		controller: () => {
			vue.currentView = Home;
		}
	},

	{
		path: "upload",
		controller: () => {
			vue.currentView = Upload;
		}
	},
	{
		path: "upload/plugin",
		controller: () => {
			vue.currentView = UploadPlugin;
		}
	},
	{
		path: "upload/theme",
		controller: () => {
			vue.currentView = UploadTheme;
		}
	}
];