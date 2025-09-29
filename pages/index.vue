<script setup lang="ts">
useHead({
  title: "Home",
});
</script>

<template>
  <Container size="lg">
    <div class="flex flex-col gap-x-10 gap-y-14 items-center md:flex-row">
      <div>
        <h2 class="text-2xl font-semibold mb-0.5 text-neutral-300 md:text-4xl md:mb-2">
          Hi, I'm
        </h2>

        <h1 class="text-4xl  underline underline-offset-[6px] !leading-[1.125] decoration-blue-300 text-neutral-200 font-extrabold mb-4 md:mb-8 md:text-7xl md:underline-offset-[10px]">
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
      </div>

      <NuxtImg
        placeholder
        src="/me.jpeg"
        format="webp"
        alt="Zsolt Gomori"
        loading="lazy"
        class="rounded-xl aspect-square object-cover object-center max-w-[320px] w-full transition-transform rotate-3 duration-300 hover:rotate-0"
      />
    </div>
  </Container>
</template>
