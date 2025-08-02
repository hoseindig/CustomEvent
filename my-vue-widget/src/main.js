// ES5-compatible Vue 2 widget initialization
var Vue = require("vue");
var App = require("./App.vue");

var MyVueWidget = {
  mount: function (elementId) {
    new Vue({
      el: "#" + elementId,
      render: function (h) {
        return h(App);
      },
    });
  },
};

// Expose widget globally
window.MyVueWidget = MyVueWidget;
