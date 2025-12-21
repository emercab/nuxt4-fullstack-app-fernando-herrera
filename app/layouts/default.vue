<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- <MainNavigation /> -->

    <!-- Header -->
    <SharedHeader />

    <!-- Main -->
    <main class="container mx-auto flex-1 mt-2">
      <slot />
    </main>

    <!-- Footer -->
    <SharedFooter />
  </div>
</template>

<style scoped></style>
