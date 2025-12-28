<template>
  <Contact :bold_name="bold_name" class="w-1/2" email="buchung@bluebirdbigband.de" name="Buchung" />
</template>

<script setup lang="ts">
import Contact from "./Contact.vue";
import { defineProps } from "vue";

withDefaults(
  defineProps<{
    bold_name?: boolean;
  }>(),
  { bold_name: false },
);
</script>
