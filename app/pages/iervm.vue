<script setup lang="ts">
  definePageMeta({
    layout: 'iervm-home-layout',
  });
  // Datos simulados para Eventos y Noticias
  const eventos = [
    {
      title: 'Día de la Familia',
      description: 'Gran integración familiar.',
      icon: 'i-heroicons-user-group',
    },
    {
      title: 'Feria de Ciencias',
      description: 'Proyectos de innovación.',
      icon: 'i-heroicons-beaker',
    },
    {
      title: 'Intercolegiados',
      description: 'Torneo deportivo anual.',
      icon: 'i-heroicons-trophy',
    },
  ];

  const noticias = [
    {
      title: 'Ganadores del Concurso de Robótica',
      description: 'Nuestros estudiantes ocuparon el primer puesto regional.',
      //to: '/noticias/robotica',
      icon: 'i-heroicons-newspaper',
      published: '2025-12-10',
    },
    {
      title: 'Apertura de Matrículas 2026',
      description: 'Conoce los requisitos para nuevos aspirantes.',
      //to: '/noticias/matriculas',
      icon: 'i-heroicons-calendar',
      published: '2025-12-05',
    },
    {
      title: 'Visita del Ministro de Educación',
      description: 'Reafirmando nuestro compromiso con la calidad educativa.',
      //to: '/noticias/ministro',
      icon: 'i-heroicons-academic-cap',
      published: '2025-11-28',
    },
  ];

  const testimonios = [
    {
      quote: 'La educación aquí transformó la vida de mi hijo.',
      author: 'María Pérez, Madre de familia',
    },
    { quote: 'Excelentes instalaciones y calidad humana.', author: 'Juan Daza, Egresado' },
    {
      quote: 'Profesores dedicados y comprometidos con el aprendizaje.',
      author: 'Ana María Gómez, Madre de familia',
    },
  ];

  // URL de tu imagen de fondo (puedes usar una local de /public)
  const bgImage = '/img/bg-image.jpg';
</script>

<template>
  <div>
    <UPageHero
      title="Formando líderes para el futuro"
      description="Una institución comprometida con la excelencia académica y los valores humanos en Valledupar."
      align="center"
      orientation="horizontal"
      :links="[
        { label: 'Conoce nuestra oferta', color: 'primary', size: 'lg' },
        // Usamos variant='solid' y color='white' para el segundo botón para que resalte sobre lo oscuro
        {
          label: 'Ver video',
          color: 'neutral',
          variant: 'solid',
          size: 'lg',
          leadingIcon: 'i-heroicons-play-circle',
        },
      ]"
      class="bg-cover bg-center bg-no-repeat min-h-150 flex items-center relative"
      :style="{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('${bgImage}')`,
      }"
      :ui="{
        title: 'text-4xl md:text-5xl font-bold text-white tracking-tight',
        description: 'text-lg text-gray-200 mt-6 max-w-2xl mx-auto',
      }"
    >
      <img
        src="https://placehold.co/300x200"
        alt="Estudiantes en el campus"
        class="rounded-xl shadow-2xl w-full object-cover h-100"
      />
    </UPageHero>

    <UPageSection
      title="Sobre Nosotros"
      description="Somos una institución con más de 50 años de historia."
      align="right"
      class="bg-gray-100 dark:bg-gray-800"
    >
      <img src="https://placehold.co/500x300" alt="Rectoría" class="rounded-lg shadow-lg" />
      <template #description>
        <p class="mt-4">Nuestro modelo pedagógico se centra en el estudiante...</p>
        <UButton label="Leer historia completa" variant="link" class="p-0 mt-2" />
      </template>
    </UPageSection>

    <UPageSection title="Próximos Eventos" description="No te pierdas nuestras actividades.">
      <UPageGrid class="grid-cols-1 md:grid-cols-3">
        <UPageCard
          v-for="(evento, i) in eventos"
          :key="i"
          :title="evento.title"
          :description="evento.description"
          :icon="evento.icon"
          class="hover:ring-2 hover:ring-primary-500 transition-all"
        />
      </UPageGrid>
    </UPageSection>

    <UPageSection title="Últimas Noticias">
      <UPageGrid>
        <UPageCard
          v-for="(noticia, i) in noticias"
          :key="i"
          :title="noticia.title"
          :description="noticia.description"
          :icon="noticia.icon"
        >
          <template #footer>
            <span class="text-xs text-gray-500">Publicado: {{ noticia.published }}</span>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <UPageSection title="Lo que dicen de nosotros" class="bg-gray-50 dark:bg-gray-900">
      <UPageColumns>
        <UPageCard v-for="(t, i) in testimonios" :key="i">
          <template #description>
            <div class="italic text-lg">"{{ t.quote }}"</div>
          </template>
          <template #footer>
            <div class="font-bold text-primary-600">— {{ t.author }}</div>
          </template>
        </UPageCard>
      </UPageColumns>
    </UPageSection>

    <UPageCTA
      title="¿Tienes dudas?"
      description="Nuestro equipo administrativo está listo para atenderte."
      align="center"
      :links="[
        {
          label: 'Escríbenos al WhatsApp',
          icon: 'i-heroicons-chat-bubble-left-right',
          color: 'secondary',
        },
        { label: 'Formulario de PQRS', color: 'neutral', variant: 'outline' },
      ]"
    />
  </div>
</template>
