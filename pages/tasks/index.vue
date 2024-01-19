<template>
  <lazy-tasks-dashboard />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "task-layout",
  // allows the user to navigate around the /tasks/ routes
  // without losing the form data (as long as it's bound to some variable)
  keepalive: true,
});
</script>
