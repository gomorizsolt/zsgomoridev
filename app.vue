<script setup lang="ts">
useSeoMeta({
  title: "Zsolt Gomori",
  description: "Experienced Vue.js/Nuxt.js web developer with a passion for creating dynamic, high-performance websites, fueled by a love for sports.",
});
</script>

<template>
  <Body class="bg-neutral-900">
    <UITooltipProvider :delay-duration="400">
      <div class="flex min-h-screen flex-col">
        <Header />

        <main class="flex-1">
          <NuxtPage />
        </main>

        <Footer />
      </div>
    </UITooltipProvider>
  </Body>
</template>
