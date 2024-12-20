<template>
  <div
    v-if="isVisible && event"
    class="modal-overlay"
  >
    <div class="modal-content">
      <img
        v-if="imageSrc"
        :src="imageSrc"
        class="w-full h-48 object-cover"
      />
      <button
        @click="closeModal"
        class="close-button"
      >
        X
      </button>

      <h3 class="text-lg font-bold text-green-800">{{ event.title }}</h3>
      <CalendarEvent
        :start="event.start"
        startFormat="dateTime"
        :end="event.end"
        endFormat="time"
      />
      <p
        class="text-lg text-green-800"
        v-html="event.description"
      ></p>
      <div
        class="absolute top-8 left-8 bg-green-800 text-green-200 px-3 py-1 rounded-full font-semibold"
      >
        From £{{ event.price }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'; // Import the 'computed' function from the 'vue' package
import CalendarEvent from '@/components/CalendarEvent.vue';
import type { Event } from '@/types/Event';

const props = defineProps<{
  event: Event | null;
  isVisible: boolean;
}>();

const emit = defineEmits(['close']);

const images = import.meta.glob<{ default: string }>('@/assets/**/*', {
  eager: true,
});

const imageSrc = computed(() => {
  if (props.event && props.event.image) {
    return images[`/src/assets/${props.event.image}`]?.default || '';
  }
  return '';
});

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  position: relative;
  overflow: hidden;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
