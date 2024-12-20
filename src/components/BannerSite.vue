<template>
  <div class="thin-banner">
    <img
      src="@/assets/ticketpass_logo.svg"
      alt="Logo"
      class="logo"
    />
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
});
</script>

<style scoped>
.thin-banner {
  height: 60px; /* Adjust this value as needed */
  padding: 10px 20px; /* Adjust padding to reduce thickness */
  display: flex;
  align-items: center;
}
.logo {
  width: 150px;
  height: 150px;
}
</style>
