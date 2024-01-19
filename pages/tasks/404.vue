<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div class="grid grid-cols-1 gap-6">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          404: Task not found
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          The task you are looking for does not exist.
        </p>
        <common-generic-button>
            <nuxt-link to="/tasks">Go back to tasks</nuxt-link>
        </common-generic-button>
      </div>
    </div>
  </div>
</template>