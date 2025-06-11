<script setup lang="ts">
// Bindet ein boolean-Modell (true = aufsteigend, false = absteigend)
const model = defineModel<boolean>()

// Wechselt die Sortierreihenfolge beim Klick
function toggle() {
  model.value = !model.value
}
</script>

<template>
  <!-- Button zur Sortierung -->
  <button @click="toggle" class="px-4 py-2 bg-blue-500 text-white rounded !important">
    Sortieren: {{ model ? 'A → Z' : 'Z → A' }}
  </button>
</template>
