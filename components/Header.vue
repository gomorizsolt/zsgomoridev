<script lang="ts" setup>
const NAV_ITEMS = [
  { label: "home", to: "/" },
  { label: "about", to: "/about" },
  { label: "blog", to: "/blog" },
  { label: "projects", to: "/projects" },
  { label: "uses", to: "/uses" },
];
</script>

<template>
  <header class="flex items-center justify-between p-8 text-sm">
    <NuxtLink to="/">
      <NuxtImg
        src="/avatar.jpeg"
        format="webp"
        loading="lazy"
        alt="Picture of me while hiking"
        class="h-12 w-12 rounded-full border-2 border-solid border-neutral-100"
        placeholder
      />
    </NuxtLink>

    <nav class="max-w-3xl flex-1">
      <ul class="flex items-center justify-between">
        <li v-for="{ label, to } in NAV_ITEMS" :key="label">
          <NuxtLink class="rounded-lg py-2 px-3 font-medium transition-colors duration-100 ease-in text-neutral-300 hover:bg-neutral-800 hover:text-neutral-100" :to="to">
            {{ label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="p-1.5" />
  </header>
</template>
