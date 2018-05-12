import Home from "./home/home.vue";
import Upload from "./upload/upload.vue";

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
	}
];