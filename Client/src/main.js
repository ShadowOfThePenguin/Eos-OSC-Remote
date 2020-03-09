import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import VueNativeSock from "vue-native-websocket";

Vue.use(VueNativeSock, "ws://" + String(store.state.ServerIP) + ":8001", {
  store: store,
  format: "json",
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 5000, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 500
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
