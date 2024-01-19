<template>
    <suspense>
        <div class="grid place-items-center">
            <div class="lg:min-w-96 bg-white rounded-md overflow-hidden shadow-md p-6">
                <div :class="!task?.isActive ? 'line-through' : null">
                    <h2 class="text-2xl font-semibold mb-4">{{ task?.title }}</h2>
                    <p class="text-gray-600 mb-4">{{ task?.description }}</p>

                </div>
                <div class="text-sm text-gray-500">
                    <p>Created at: {{ task?.createdAt }}</p>
                    <p>Updated at: {{ task?.updatedAt }}</p>
                </div>
                <div class="mt-4 flex justify-end space-x-2">
                    <CommonGenericButton @click="changeStatus">
                       <span> Mark as {{ task?.isActive ? 'completed' : 'active' }}</span>
                    </CommonGenericButton>
                    <CommonGenericButton>
                        <nuxt-link :to="`/tasks/edit/${task?.id}`">Edit task</nuxt-link>
                    </CommonGenericButton>
                    <CommonGenericButton @click="deleteTask">
                        <span class="text-red-600">Delete</span>
                    </CommonGenericButton>
                </div>
            </div>
        </div>
    </suspense>
</template>

<script setup lang="ts">
import { useTaskStore } from "~/store/tasks/taskStore";
import type { Task } from "~/types";

const taskStore = useTaskStore();

definePageMeta({
    layout: "task-layout",
    // allows the user to navigate around the /tasks/ routes
    // without losing the form data (as long as it's bound to some variable)
    keepalive: true,
});

const route = useRoute();
const router = useRouter();

const taskUUID = route.params?.id.toString();

const task = ref<Task | undefined>(undefined);

async function fetchData() {
    task.value = await taskStore.getTaskById(taskUUID);
    if (!task.value) router.push("/tasks/404");
}

onBeforeMount(() => fetchData());

const deleteTask = (): void => {
    if (window.confirm("Are you sure you want to delete this task?")) {
        taskStore.deleteTask(task.value?.id as string);
        const router = useRouter();
        router.push('/tasks');
    }
};

const changeStatus = async (): Promise<void> => {
    taskStore.changeStatus(task.value?.id as string);
}
</script>
  