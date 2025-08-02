import Vue from "vue";
import App from "./App.vue";

// Create a Vue instance and expose it as MyVueWidget
window.MyVueWidget = {
  mount(selector) {
    new Vue({
      render: (h) => h(App),
    }).$mount(selector);
  },
};
