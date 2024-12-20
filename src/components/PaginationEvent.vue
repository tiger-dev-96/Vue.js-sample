<template>
  <div class="mt-2 flex justify-center">
    <button
      v-for="page in totalPages"
      :key="page"
      @click="$emit('change-page', page)"
      :class="[
        'mx-1 px-2 py-1 rounded',
        currentPage === page ? 'bg-green-600 text-white' : 'bg-green-100',
      ]"
    >
      {{ page }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  totalPages: Number,
  currentPage: Number,
});
</script>
