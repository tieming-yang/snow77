<template>
  <div class="">
    <p>Some default layout content shared across all pages</p>

    <slot />
  </div>
</template>

<script lang="ts" setup>

const route = useRoute()

useHead({
  meta: [{ property: 'og:title', content: `TieMingYang - ${route.meta.title}` }],
})

</script>

<style></style>