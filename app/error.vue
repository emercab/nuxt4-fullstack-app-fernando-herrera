<script setup lang="ts">
  import type { NuxtError } from '#app';

  const props = defineProps<{
    error: NuxtError;
  }>();
</script>

<template>
  <UError
    :error="error"
    :clear="{
      size: 'xl',
      icon: 'i-lucide-arrow-left',
    }"
    :ui="{
      statusCode: 'text-9xl font-bold',
    }"
  />
</template>

<style scoped></style>
