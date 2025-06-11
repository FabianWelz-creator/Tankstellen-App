<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <!-- Eingabefeld zum Filtern nach Straßennamen -->
  <input
      v-model="model"
      type="text"
      placeholder="Nach Straße suchen..."
      class="border p-2 sm:w-10/12 md:w-8/12 lg:w-5/6 rounded
           bg-white text-black placeholder-gray-500
           dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
           focus:outline-none focus:ring focus:ring-blue-300"
  />
</template>
