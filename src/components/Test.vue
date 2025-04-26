<template>
  <div class="text-red-400">{{ msg }}</div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
  },
});
</script>
