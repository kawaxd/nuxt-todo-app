<script setup lang="ts">
import type { Task } from "~/types";

import TaskCard from "~/components/tasks/task-card.vue";
import Checkbox from "~/components/common/checkbox.vue";

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Task 1",
    description: "Description for Task 1",
    isActive: true,
    createdAt: "2022-01-01T12:00:00Z",
    updatedAt: "2022-01-01T12:30:00Z",
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description for Task 2",
    isActive: false,
    createdAt: "2022-01-02T14:00:00Z",
    updatedAt: "2022-01-02T14:45:00Z",
  },
  {
    id: "3",
    title: "Task 3",
    description: "Description for Task 3",
    isActive: true,
    createdAt: "2022-01-03T09:30:00Z",
    updatedAt: "2022-01-03T10:15:00Z",
  },
];
</script>

<template>
  <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
    <template v-for="task in mockTasks" :key="task.id">
      <div class="flex">
        <checkbox />
        <task-card :task="task" />
      </div>
    </template>
  </ul>
</template>
