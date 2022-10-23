import Vue from "vue";
import Router from "vue-router";

import App from "./App";
import Login from "./components/Login";
import Home from "./components/Home"

Vue.use(Router);

const routes = [
    {path: "/", component: Home},
    {path: "/login", component: Login}
];

const router = new Router({
    routes
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
