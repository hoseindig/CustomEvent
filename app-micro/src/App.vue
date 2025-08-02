<template>
  <div>
    <h1>App-A</h1>
    <button @click="sendEvent">Send Event</button>
  </div>
</template>
<script>
export default {
  methods: {
    sendEvent() {
      const event = new CustomEvent("my-event", {
        detail: { message: "Hello from App A" },
      });
      window.parent.dispatchEvent(event);
    },
  },
};
</script>
