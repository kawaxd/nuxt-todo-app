<template>
  <button
    :type="type"
    class="py-2 px-4 border rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { ButtonType } from "~/types";

const props = defineProps({
  type: {
    type: String as PropType<ButtonType>,
    default: "button",
  },
});
</script>
