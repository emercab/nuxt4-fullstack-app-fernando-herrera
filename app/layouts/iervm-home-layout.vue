<script setup lang="ts">
  const links = [
    { label: 'Inicio', to: '/' },
    { label: 'Nosotros', to: '/nosotros' },
    { label: 'Eventos', to: '/eventos' },
    { label: 'Noticias', to: '/noticias' },
    { label: 'Contacto', to: '/contacto' },
  ];
</script>

<template>
  <div>
    <div class="bg-gray-800 text-white py-2 text-xs font-medium">
      <!-- Topbar -->
      <UContainer class="flex justify-between items-center">
        <span>📞 +57 300 123 4567 | ✉️ contacto@tusitio.edu.co</span>
        <div class="flex gap-4">
          <a href="#" class="hover:text-primary-200">Intranet</a>
          <a href="#" class="hover:text-primary-200">Padres</a>
        </div>
      </UContainer>
    </div>

    <!-- Header -->
    <UHeader :links="links">
      <template #left>
        <span class="text-xl font-bold">Mi Institución</span>
      </template>

      <template #right>
        <UButton label="Portal Académico" color="primary" variant="ghost" />
        <UButton label="Admisiones" color="secondary" />
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <UFooter>
      <template #top>
        <UFooterColumns :links="links" />
      </template>
      <template #left>
        <span class="text-sm text-gray-500">© 2025 Mi Institución - Valledupar, Colombia.</span>
      </template>
    </UFooter>
  </div>
</template>
