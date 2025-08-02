<template>
  <div>
    <h1>App-b</h1>
    <p>Waiting for event...</p>
    <p v-if="message">Received: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { message: "" };
  },
  mounted() {
    window.parent.addEventListener("my-event", (e) => {
      this.message = e.detail?.message || "No message";
    });
  },
};
</script>
