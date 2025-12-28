<template>
  <Contact
    class="w-1/2"
    email="bandleiter@bluebirdbigband.de"
    mobile="0171 5808481"
    name="Klaus Gehrlein"
    :bold_name="bold_name"
  />
</template>

<script setup lang="ts">
import Contact from "./Contact.vue";
import { defineProps } from "vue";

defineProps<{ bold_name?: boolean }>();
</script>
