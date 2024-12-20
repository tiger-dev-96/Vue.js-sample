<template>
  <div
    class="max-w-sm mx-auto bg-green-100 rounded-lg shadow-md overflow-hidden m-3"
  >
    <div class="relative">
      <img
        :src="images[`/src/assets/${event.image}`]?.default"
        :alt="event.title"
        class="w-full h-48 object-cover"
      />
      <div
        class="absolute top-0 left-0 bg-white text-black text-xs font-semibold px-2 py-1 rounded-br-lg"
      >
        Music
      </div>
    </div>
    <div class="p-4">
      <h3 class="text-lg font-bold text-green-800">{{ event.title }}</h3>
      <CalendarEvent
        :start="event.start"
        startFormat="dateTime"
        :end="event.end"
        endFormat="time"
      />

      <div class="mt-4 flex justify-between items-center">
        <span class="text-lg font-semibold text-green-800"
          >From £{{ event.price }}</span
        >
        <button
          @click="$emit('view')"
          class="bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-400 transition-colors duration-300"
        >
          View
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { Event } from '@/types/Event';
import CalendarEvent from './CalendarEvent.vue';

defineProps<{
  event: Event;
}>();

defineEmits(['view']);

const images = import.meta.glob<{ default: string }>('@/assets/**/*', {
  eager: true,
});
</script>

