<script lang="ts" setup>

const route = useRoute()

useHead({
  meta: [{ property: 'og:title', content: `TieMingYang - ${route.meta.title}` }],
})

</script>

<template>
  <div class="">
    <NuxtImg src="/img/logo-binary.png" alt="image" width="33" height="33" class="rounded-full m-1" />
    <slot />
  </div>
</template>


<style></style>