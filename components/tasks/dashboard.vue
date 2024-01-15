<script setup lang="ts">
import TaskCard from "~/components/tasks/task-card.vue";

import { useTaskStore } from "~/store/tasks/taskStore";

const taskStore = useTaskStore();

const {data: tasks} = await useAsyncData("tasks", async () => {
  return await taskStore.getAllTasks();
});

</script>

<template>
  <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
    <task-card :task="task" v-for="task in tasks" :key="task.id" />
  </ul>
</template>
