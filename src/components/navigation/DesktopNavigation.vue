<template>
  <ul class="text-white mt-3 gap-9 justify-center content-center">
    <NavigationElement v-for="route in routes" :element="route" />
  </ul>
</template>

<script lang="ts" setup>
import { getRoutes } from "../../lib/routes.ts";
import NavigationElement from "./NavigationElement.vue";

const routes = getRoutes();
</script>

<style scoped>
@reference "tailwindcss";
ul > li {
  @apply relative px-4 leading-[3em] cursor-pointer font-semibold tracking-[1px] rounded-md whitespace-nowrap;
}

ul > li:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
