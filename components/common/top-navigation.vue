<template>
  <header class="p-4 hidden lg:block">
    <div class="flex items-center justify-between">
      <app-title />
      <nav class="flex space-x-4">
        <nuxt-link
          :to="tab.route"
          v-for="tab in tabs"
          :key="tab.id"
          class="hover:text-gray-300 flex items-center"
        >
          <span class="mr-1">
            <img :src="tab.icon" :alt="tab.text" class="h-5 w-5" />
          </span>
          {{ tab.text }}
        </nuxt-link>
      </nav>
    </div>
  </header>
  <header class="lg:hidden">
    <app-title />
  </header>
</template>

<script setup lang="ts">
import { NAVIGATION_ROUTES } from "~/utils/constants";
import AppTitle from "~/components/common/app-title.vue";

const tabs = ref(NAVIGATION_ROUTES);
</script>
