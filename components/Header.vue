<script lang="ts" setup>
const NAV_ITEMS = [
  { label: "home", to: "/" },
  { label: "about", to: "/about" },
  { label: "blog", to: "/blog" },
  { label: "projects", to: "/projects" },
  { label: "uses", to: "/uses" },
];

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header class="flex items-center justify-between p-8 text-sm">
    <button
      :class="['tham tham-e-spin tham-w-6 z-20 md:hidden', isOpen && 'tham-active']"
      aria-label="Toggle menu"
      @click="toggleMenu"
    >
      <div class="tham-box">
        <div class="tham-inner bg-neutral-300" />
      </div>
    </button>

    <div v-show="isOpen" class="absolute top-0 left-0 z-10 h-full w-full bg-neutral-900">
      <nav class="grid h-full w-full content-center justify-center">
        <ul class="flex flex-col gap-y-4 transition-opacity duration-200">
          <li v-for="{ label, to } in NAV_ITEMS" :key="label">
            <NuxtLink
              class="text-2xl font-medium text-neutral-300 transition-colors duration-150 ease-in hover:text-neutral-100"
              exact-active-class="text-neutral-100"
              :to="to"
              @click="toggleMenu"
            >
              {{ label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <NuxtLink to="/">
      <NuxtImg
        src="/avatar.jpeg"
        format="webp"
        loading="lazy"
        alt="Picture of me while hiking"
        class="h-10 w-10 rounded-full border-2 border-solid border-neutral-100 md:h-12 md:w-12"
        placeholder
      />
    </NuxtLink>

    <nav class="max-w-3xl flex-1 hidden md:block">
      <ul class="flex items-center justify-end gap-x-4 lg:gap-x-8">
        <li v-for="{ label, to } in NAV_ITEMS" :key="label">
          <NuxtLink
            class="rounded-lg py-2 px-3 font-medium transition-colors duration-100 ease-in text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100"
            exact-active-class="bg-neutral-800 !text-neutral-100"
            :to="to"
          >
            {{ label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
