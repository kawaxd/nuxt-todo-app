<template>
  <section
    class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow lg:hidden"
  >
    <div class="flex justify-between">
      <nuxt-link
        :to="tab.route"
        v-for="tab in tabs"
        :key="tab.id"
        class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <img
          :src="tab.icon"
          :alt="tab.text"
          height="25"
          width="25"
          class="inline-block mb-1"
        />
        <span class="tab block text-xs">{{ tab.text }}</span>
      </nuxt-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { NAVIGATION_ROUTES } from "~/utils/constants";

const tabs = ref(NAVIGATION_ROUTES);
</script>
