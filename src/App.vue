<script setup lang="ts">
import BannerSite from '@/components/BannerSite.vue';
import EventsList from '@/pages/EventsList.vue';
</script>

<template>
  <BannerSite />
  <hr class="my-2 border-t border-gray-300" />
  <EventsList />
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
