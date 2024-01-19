<template>
  <form @submit.prevent="submitAction">
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
      :placeholder="task?.title || 'Enter a title'"
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
      :placeholder="task?.description || 'Enter a description'"
    ></textarea>

    <common-generic-button
      type="submit"
      class="mt-4"
    >
      {{ props.formVariant === "create" ? "Create" : "Update" }} task
    </common-generic-button>
  </form>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import generateUUID from "~/utils/generateUUID";
import { useTaskStore } from "~/store/tasks/taskStore";
import { useRouter } from "vue-router";
import type { Task, FormVariant } from "~/types";


const props = defineProps({
  formVariant: {
    type: String as PropType<FormVariant>,
    required: true,
  },
  task: {
    type: Object as PropType<Task>,
    default: null,
  },
});

const taskStore = useTaskStore();
const router = useRouter();

const { title, description } = toRefs(props.task || { title: "", description: "" });

const createTask = (): void => {
  const newTask: Task = {
    id: generateUUID(),
    title: title.value,
    description: description.value,
    isActive: true,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };

  taskStore.createTask(newTask);
  clearForm();

  confirmAndNavigate('Task created successfully! Do you want to view all tasks?', '/tasks');
};

const updateTask = (): void => {
  const updatedTask: Task = {
    id: props.task?.id,
    title: title.value,
    description: description.value,
    isActive: props.task?.isActive,
    createdAt: props.task?.createdAt,
    updatedAt: new Date().toLocaleString(),
  } as Task;

  taskStore.updateTask(updatedTask);
  clearForm();

  confirmAndNavigate('Task updated successfully! Do you want to view this task?', `/tasks/${props.task?.id}`);
};

const clearForm = (): void => {
  title.value = "";
  description.value = "";
};

const confirmAndNavigate = (message: string, route: string): void => {
  const confirmation = window.confirm(message);
  confirmation && router.push(route);
};

const submitAction = props.formVariant === "create" ? createTask : updateTask;
</script>

