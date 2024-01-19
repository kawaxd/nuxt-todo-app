<template>
  <div>
    <lazy-tasks-task-form :task="task" form-variant="update" />
  </div>
</template>

<script setup lang="ts">
import type {Ref} from "vue";
import type { Task } from "~/types";

import { useTaskStore } from "~/store/tasks/taskStore";

const taskStore = useTaskStore();

definePageMeta({
  layout: "task-layout",
  // allows the user to navigate around the /tasks/ routes
  // without losing the form data (as long as it's bound to some variable)
  keepalive: true,
});

const route = useRoute();

const taskUUID = route.params?.id.toString();

const task = ref(undefined) as Ref<Task>;

onBeforeMount(async() => {
  const router = useRouter();
  task.value = await taskStore.getTaskById(taskUUID) as Task;
  if (!task.value) await router.push("/tasks/404");
});
</script>
