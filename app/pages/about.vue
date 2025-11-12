<script lang="ts" setup>
useHead({
  title: "About"
})

definePageMeta({
  layout: '2',
  layoutTransition: {
    name: 'slide-in',
  },
})
</script>

<template>
  <div>
    <h1 class="text-3xl">About page</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<style></style>