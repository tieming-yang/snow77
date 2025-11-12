<script setup lang="ts">

useHead({
  title: "Home Page",
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} %separator %siteName` : '%siteName'
  },
  templateParams: {
    siteName: 'TieMingYang',
    separator: '-',
  },
  meta: [
    { name: 'description', content: 'My amazing site.' },
  ]
})

useSeoMeta({
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  /* transition: all 0.4s; */

  /* Cool we can use tilwind here too! */
  @apply transition-all duration-300
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* this is a different transition */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>