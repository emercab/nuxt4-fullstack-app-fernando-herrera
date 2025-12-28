<script setup lang="ts">
  import { h, resolveComponent } from 'vue';
  import type { TableColumn } from '@nuxt/ui';

  const UBadge = resolveComponent('UBadge');

  const { products, total, currentPage, perPage } = await usePaginatedProducts();

  const columns: TableColumn<Product>[] = [
    {
      accessorKey: 'id',
      header: '#',
      cell: ({ row }) => `#${row.getValue('id')}`,
    },
    {
      accessorKey: 'images',
      header: 'Imagen',
      cell: ({ row }) => {
        const images = row.getValue('images') as string[];
        return h('img', {
          src: images[0],
          alt: row.getValue('name'),
          class: 'w-12 h-12 object-cover rounded',
        });
      },
    },
    {
      accessorKey: 'name',
      header: 'Nombre',
    },
    {
      accessorKey: 'description',
      header: 'Descripción',
      cell: ({ row }) => {
        return h(
          'div',
          { class: 'whitespace-normal line-clamp-3 max-w-xs' },
          row.getValue('description') as string
        );
      },
    },
    {
      accessorKey: 'price',
      header: 'Precio',
      cell: ({ row }) => {
        const price = formatCurrency(row.getValue('price'));
        return h('div', { class: 'text-right font-medium' }, price);
      },
    },
    {
      accessorKey: 'tags',
      header: 'Etiquetas',
      cell: ({ row }) => {
        const tags = row.getValue('tags') as string[];
        return h(
          'div',
          { class: 'flex flex-wrap gap-1' },
          tags.map((tag) => h(UBadge, { label: tag, color: 'primary', variant: 'subtle' }))
        );
      },
    },
    {
      accessorKey: 'createdAt',
      header: 'Creado',
      cell: ({ row }) => {
        const date = new Date(row.getValue('createdAt'));
        return h('div', { class: 'text-right' }, formatDate(date));
      },
    },
  ];
</script>

<template>
  <div class="space-y-6">
    <!-- Header with Action Button -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Productos</h1>
        <p class="text-gray-600 dark:text-gray-400 mt-2">
          Gestiona y organiza tu catálogo de productos
        </p>
      </div>
      <UButton icon="i-lucide-plus" label="Agregar Producto" color="primary" size="lg" />
    </div>

    <UTable sticky :data="products" :columns="columns" class="flex-1" />

    <SharedPagination :total="total" :model-value="currentPage" :per-page="perPage" />
  </div>
</template>
