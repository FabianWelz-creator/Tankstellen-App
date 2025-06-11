<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from 'vue'
import SearchBar from './components/SearchBar.vue'
import SortToggle from './components/SortToggle.vue'
import StationList from './components/StationList.vue'
import { fetchStations } from './services/fetchStations'
import type { Station } from './types/Station'

// Tankstellen-Daten und UI-Zustände
const stations = ref<Station[]>([])


// … Station-Filter + Sort …
const searchQuery = ref('')
const ascending = ref(true)

// Boolean um dark/light zu tracken
const dark = ref(localStorage.getItem('theme') === 'dark')

// Direkt beim Laden die Klasse setzen
if (dark.value) {
  document.documentElement.classList.add('dark')
}

// Klasse dynamisch removen
watchEffect(() => {
  localStorage.setItem('theme', dark.value ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', dark.value)
})

// Daten laden beim Mount
onMounted(async () => {
  stations.value = await fetchStations()
})

// Such- und Sortierlogik
const filteredStations = computed(() =>
  stations.value
    .filter(station =>
      station.adresse.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    .sort((a, b) =>
      ascending.value
        ? a.adresse.localeCompare(b.adresse)
        : b.adresse.localeCompare(a.adresse)
    )
)
</script>

<template>
  <div class="min-h-screen font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
    <header class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10 px-4 py-5">
      <h1 class="text-3xl font-bold text-center text-blue-700 dark:text-blue-300">🚗 Tankstellen Köln</h1>
    </header>

    <div class="flex justify-end px-4 pt-4">
      <!--Darkmode Switch  -->
      <button
        @click="dark = !dark"
        class="p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {{ dark ? '☀️ Light Mode' : '🌙 Dark Mode' }}
      </button>
    </div>

    <main class="px-4 py-8 space-y-6">
      <div class="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <SearchBar v-model="searchQuery" />
        <SortToggle v-model="ascending" />
      </div>

      <div class="rounded-lg shadow overflow-hidden bg-white dark:bg-gray-900">
        <StationList :stations="filteredStations" />
      </div>
    </main>

    <footer class="text-center text-sm text-gray-400 py-6">
      Datenquelle:
      <a href="https://offenedaten-koeln.de/dataset/tankstellen-koeln"
         class="underline hover:text-blue-700 dark:hover:text-blue-300"
         target="_blank">
        Open Data Köln
      </a>
    </footer>
  </div>
</template>

