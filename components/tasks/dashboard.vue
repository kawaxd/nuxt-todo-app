<script setup lang="ts">
import type {ComputedRef} from "vue";
import type {Task} from "~/types";
import TaskCard from "~/components/tasks/task-card.vue";

import { useTaskStore } from "~/store/tasks/taskStore";

const taskStore = useTaskStore();

const sortedTasks: ComputedRef<Task[]> = computed(() => {
  return taskStore.tasks.slice().sort((a, b) => {
    // puts completed tasks at the end of the list
    if (a.isActive && !b.isActive) {
      return -1;
    } else if (!a.isActive && b.isActive) {
      return 1;
    }
    return 0;
  });
});
</script>

<template>
  <template v-if="sortedTasks?.length">
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 mx-auto">
      <task-card :task="task" v-for="task in sortedTasks" :key="task.id" />
    </ul>
  </template>

  <template v-else>
    <div class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <p class="text-gray-500 mb-4">You haven't added any tasks yet.</p>
        <common-generic-button>
          <nuxt-link to="/tasks/create"> Create Your First Task </nuxt-link>
        </common-generic-button>
      </div>
    </div>
  </template>
</template>
