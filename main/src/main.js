import "./sass/main.sass";
import "./fonts/Lobster-Regular.ttf";

import Vue from "vue/dist/vue.min.js";

import AsyncComputed from "vue-async-computed";
Vue.use(AsyncComputed);

import Icon from "vue-awesome/components/Icon.vue";
Vue.component("icon", Icon);

import Button from "./vue_components/button/button.vue";
Vue.component("zms-button", Button);

import SmallButton from "./vue_components/button/small.vue";
Vue.component("zms-small-button", SmallButton);

import FielInput from "./vue_components/file/file.vue";
Vue.component("zms-file-input", FielInput);

import SmallHeader from "./vue_components/header/header.vue";
Vue.component("zms-small-header", SmallHeader);

import Slide from "./vue_components/slide/slide.vue";
Vue.component("zms-slide", Slide);

Vue.prototype.$eventBus = new Vue();

import root from "./vue_components/root.vue";
var app = new Vue({
	el: "#app",
	render: h => h(root),
	data: {
		currentView: null,
		siteInfo: {
			settings: {
				own: false
			}
		}
	}
});

import {route, zeroPage} from "./route.js";
route(app);

Vue.prototype.$zeroPage = zeroPage;

(async function() {
	const siteInfo = await zeroPage.getSiteInfo();
	app.$eventBus.$emit("setSiteInfo", siteInfo);
	app.siteInfo = siteInfo;
})();
zeroPage.on("setSiteInfo", msg => {
	app.$eventBus.$emit("setSiteInfo", msg.params);
	app.siteInfo = msg.params;
});