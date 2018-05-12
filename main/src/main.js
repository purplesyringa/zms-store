import "./sass/main.sass";
import "./fonts/Lobster-Regular.ttf";

import Vue from "vue/dist/vue.min.js";

import AsyncComputed from "vue-async-computed";
Vue.use(AsyncComputed);

import Icon from "vue-awesome/components/Icon.vue";
Vue.component("icon", Icon);

import Button from "./vue_components/button/button.vue";
Vue.component("zms-button", Button);

Vue.prototype.$eventBus = new Vue();

import root from "./vue_components/root.vue";
var app = new Vue({
	el: "#app",
	render: h => h(root),
	data: {
		currentView: null,
		zeroPage: null
	}
});

import {route, zeroPage} from "./route.js";
route(app);

Vue.prototype.$zeroPage = zeroPage;

(async function() {
	const siteInfo = await zeroPage.getSiteInfo();
	app.$eventBus.$emit("setSiteInfo", siteInfo);
})();
zeroPage.on("setSiteInfo", msg => {
	app.$eventBus.$emit("setSiteInfo", msg.params);
});