<script setup lang="ts">
useHead({
  title: "Home",
});
</script>

<template>
  <Container class="text-center">
    <h2 class="text-3xl font-semibold md:text-5xl mb-2 text-neutral-300">
      Hi, I'm
    </h2>

    <h1 class="text-4xl underline underline-offset-[6px] decoration-blue-300 text-neutral-200 font-extrabold text-center mb-6 md:text-7xl md:underline-offset-[10px]">
      ZSOLT GOMORI
    </h1>

    <p class="text-neutral-300 mb-4">
      Experienced web developer with a passion for creating dynamic, high-performance websites, fueled by a love for sports.
    </p>

    <NuxtLink to="/about">
      <UIButton>
        About Me

        <span class="i-heroicons-arrow-right-solid" />
      </UIButton>
    </NuxtLink>
  </Container>
</template>
