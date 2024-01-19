<template>
  <div @click="toggleCheckbox" class="flex items-center cursor-pointer">
    <div
      :class="{ 'bg-blue-500': isActive }"
      class="w-6 h-6 rounded border border-gray-300 mr-2"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps(["isActive", "toggleCheckbox"]);
</script>
