import Home from "./home/home.vue";
import Upload from "./upload/upload.vue";
import UploadPlugin from "./upload/plugin.vue";

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
	}
];