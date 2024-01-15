<template>
  <form @submit.prevent="createTask">
    <label for="title" class="block text-sm font-medium text-gray-700"
      >Title</label
    >
    <input
      v-model="title"
      type="text"
      id="title"
      name="title"
      required
      class="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full"
    />

    <label
      for="description"
      class="block mt-4 text-sm font-medium text-gray-700"
      >Description</label
    >
    <textarea
      v-model="description"
      id="description"
      name="description"
      rows="4"
      class="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full"
    ></textarea>

    <button
      type="submit"
      class="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Create Task
    </button>
  </form>
</template>

<script setup lang="ts">
import generateUUID from "~/utils/generateUUID";

import { useTaskStore } from "~/store/tasks/taskStore";

const taskStore = useTaskStore();

import type { Task } from "~/types";

const title = ref("");
const description = ref("");

const createTask = () => {
  const newTask: Task = {
    id: generateUUID(),
    title: title.value,
    description: description.value,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  taskStore.createTask(newTask);
};
</script>
