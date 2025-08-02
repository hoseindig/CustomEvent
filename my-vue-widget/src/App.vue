<template>
  <div>
    <h1>App-A</h1>
    <button @click="sendEvent">Send Event</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendEvent: function () {
      var event = new CustomEvent("my-event", {
        detail: { message: "Hello from App A" },
      });
      window.parent.dispatchEvent(event);
    },
  },
};
</script>

<style scoped>
h1 {
  color: #2c3e50;
  font-family: Arial, sans-serif;
}
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #3aa876;
}
</style>
