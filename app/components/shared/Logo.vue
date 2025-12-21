<script setup lang="ts">
  const props = defineProps<{ class?: string }>();
</script>

<template>
  <div class="flex items-center space-x-2">
    <img src="/logo.svg" alt="Logo" :class="props.class" />
    <span>Mi Sitio</span>
  </div>
</template>

<style scoped></style>
