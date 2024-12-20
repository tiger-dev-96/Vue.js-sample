<template>
  <div class="p-1">
    <div class="flex items-center">
      <i class="fas fa-calendar-alt text-green-500 mr-2"></i>
      <span class="text-gray-700">{{ formattedStartDate }} &nbsp;</span>
      <span class="text-gray-500">
        {{ formattedStartTime }} to {{ formattedEndTime }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  start: string;
  end: string;
}

const props = defineProps<Props>();

const formatDateTime = (date: Date) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'UTC',
  };

  const formattedDate = date.toLocaleDateString('en-US', dateOptions);
  let formattedTime = date.toLocaleTimeString('en-US', timeOptions);

  if (formattedTime.startsWith('24:')) {
    formattedTime = formattedTime.replace('24:', '00:');
  }
  return { formattedDate, formattedTime };
};

const formattedStart = computed(() => formatDateTime(new Date(props.start)));
const formattedEnd = computed(() => formatDateTime(new Date(props.end)));

const formattedStartDate = computed(() => formattedStart.value.formattedDate);
const formattedStartTime = computed(() => formattedStart.value.formattedTime);
const formattedEndTime = computed(() => formattedEnd.value.formattedTime);
</script>
