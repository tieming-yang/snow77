<script lang="ts" setup>

const route = useRoute()

useHead({
  meta: [{ property: 'og:title', content: `TieMingYang - ${route.meta.title}` }],
})

</script>

<template>
  <div class="">
    <NuxtImg src="/img/logo-binary.png" alt="image" width="400" height="400" class="rounded-full" />
    <slot />
  </div>
</template>


<style></style>