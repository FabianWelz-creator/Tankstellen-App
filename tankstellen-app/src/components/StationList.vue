<script setup lang="ts">
import type { Station } from '../types/Station'
defineProps<{ stations: Station[] }>()
</script>

<template>
  <ul class="divide-y rounded overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    <li
      v-for="station in stations"
      :key="station.id"
      class="p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {{ station.adresse }}
    </li>
  </ul>
</template>

