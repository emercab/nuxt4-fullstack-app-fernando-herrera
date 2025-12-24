<script setup lang="ts">
  const { data: testimonials } = await useFetch('/api/home/reviews');
</script>

<template>
  <UPageSection
    title="Testimonials"
    description="See what our users have to say about NuxtHub."
    icon="lucide:circle-check-big"
    :ui="{ leadingIcon: 'text-4xl text-emerald-500' }"
    class="bg-gray-900"
  >
    <UPageColumns>
      <UPageCard
        variant="solid"
        to="https://cloudflare.com"
        icon="i-logos-cloudflare-icon"
        title="Cloudflare's Workers LaunchPad"
        description="NuxtHub is part of the Cloudflare's Workers Launchpad Cohort to make sure you get a first-class experience on top of Cloudflare's network."
        :ui="{ leadingIcon: 'size-10' }"
      />

      <UPageCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.description"
        :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
      >
        <template #footer>
          <UUser
            :name="testimonial.name"
            :description="testimonial.subtitle"
            size="xl"
            :avatar="{ src: testimonial.profileImage, alt: `${testimonial.name}'s image` }"
          />
        </template>
      </UPageCard>
    </UPageColumns>
  </UPageSection>
</template>
