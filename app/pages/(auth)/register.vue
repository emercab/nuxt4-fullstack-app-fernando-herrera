<script setup lang="ts">
  definePageMeta({
    layout: 'login-layout',
  });

  import * as z from 'zod';
  import type { FormSubmitEvent, AuthFormField, ButtonProps } from '@nuxt/ui';

  const toast = useToast();

  const fields: AuthFormField[] = [
    {
      name: 'fullName',
      type: 'text',
      label: 'Full Name',
      placeholder: 'Enter your full name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      required: true,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      required: true,
    },
  ];

  const submitButton: ButtonProps = {
    label: 'Register',
    color: 'primary',
  };

  const schema = z.object({
    fullName: z.string('Full Name is required').min(3, 'Must be at least 3 characters'),
    email: z.email('Invalid email'),
    password: z.string('Password is required').min(8, 'Must be at least 8 characters'),
  });

  type Schema = z.output<typeof schema>;

  function onSubmit(payload: FormSubmitEvent<Schema>) {
    console.log('Submitted', payload);
  }
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full min-w-sm max-w-md">
      <UAuthForm
        :schema="schema"
        title="Register"
        description="Create a new account."
        icon="i-lucide-user"
        :submit="submitButton"
        :fields="fields"
        @submit="onSubmit"
      />
    </UPageCard>

    <UButton
      color="primary"
      variant="ghost"
      label="Already have an account? Login here."
      to="/login"
    />
  </div>
</template>
