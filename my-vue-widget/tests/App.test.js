// Jest test for App.vue
const Vue = require("vue");
const App = require("../src/components/App.vue");

describe("App.vue", function () {
  it("should mount without errors", function () {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector("h1").textContent).toBe("App-A");
  });

  it("should dispatch custom event on button click", function () {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();

    // Mock window.parent.dispatchEvent
    const dispatchEventSpy = jest.spyOn(window.parent, "dispatchEvent");

    // Trigger the sendEvent method
    vm.sendEvent();

    // Verify the event was dispatched
    expect(dispatchEventSpy).toHaveBeenCalled();
    const event = dispatchEventSpy.mock.calls[0][0];
    expect(event.type).toBe("my-event");
    expect(event.detail.message).toBe("Hello from App A");

    // Clean up
    dispatchEventSpy.mockRestore();
  });
});
