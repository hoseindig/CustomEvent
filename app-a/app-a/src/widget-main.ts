import { createApp } from "vue";
import App from "./App.vue";

const mount = (selector = "my-app") => {
  const el = document.querySelector(selector);
  if (el) {
    createApp(App).mount(el);
  }
};

(window as any).MyVueWidget = { mount };
