<script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui';

  const route = useRoute();

  const items = computed<NavigationMenuItem[]>(() => [
    {
      label: 'Productos',
      to: '/products',
      // icon: 'i-lucide-book-open',
      active: route.path.startsWith('/products'),
    },
    {
      label: 'Precios',
      to: '/pricing',
      // icon: 'i-lucide-box',
      active: route.path.startsWith('/pricing'),
    },
    {
      label: 'Nosotros',
      to: '/about',
      // icon: 'i-simple-icons-figma',
      active: route.path === '/about',
    },
    {
      label: 'Contacto',
      to: '/contact',
      // icon: 'i-lucide-rocket',
      // target: '_blank',
      active: route.path === '/contact',
    },
  ]);

  const MobileMenuItems = ref<NavigationMenuItem[]>([
    ...items.value,
    {
      label: 'Login',
      to: '/login',
      // icon: 'i-lucide-log-in',
      active: route.path === '/login',
    },
  ]);
</script>

<template>
  <UHeader>
    <template #title>
      <SharedLogo class="h-10 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>

      <UButton
        color="primary"
        variant="solid"
        icon="i-lucide-log-in"
        to="/login"
        label="Login"
        class="hidden lg:block"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="MobileMenuItems" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

<style scoped></style>
