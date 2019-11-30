import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use( CKEditor );

Vue.use(VueMaterial);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
