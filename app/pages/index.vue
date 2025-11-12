<script lang="ts" setup>

definePageMeta({
  title: 'Home Page',
})

const { data } = await useFetch('/api/sapporo')

</script>

<template>
  <div>
    <h1>Home</h1>
    <NuxtLink to="/about">About page</NuxtLink>
    <p>{{ data }}</p>
  </div>

</template>

<style></style>