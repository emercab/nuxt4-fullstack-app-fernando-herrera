<script setup lang="ts">
  const cards = ref([
    {
      title: 'Icons',
      description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
      icon: 'i-lucide-smile',
      //to: '/docs/getting-started/integrations/icons',
    },
    {
      title: 'Fonts',
      description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
      icon: 'i-lucide-a-large-small',
      //to: '/docs/getting-started/integrations/fonts',
    },
    {
      title: 'Color Mode',
      description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.',
      icon: 'i-lucide-sun-moon',
      //to: '/docs/getting-started/integrations/color-mode',
    },
  ]);
</script>

<template>
  <UPageSection
    title="Features"
    description="Explore the powerful features that make our product stand out."
    icon="i-lucide-info"
    :ui="{
      leadingIcon: 'text-4xl text-emerald-500',
    }"
  >
    <UPageGrid>
      <UPageCard v-for="(card, index) in cards" :key="index" v-bind="card" />
    </UPageGrid>
  </UPageSection>
</template>
