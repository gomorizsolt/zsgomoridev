<script setup lang="ts">
const LINKS = [
  {
    label: "GitHub",
    link: "https://github.com/gomorizsolt",
    icon: "i-fa6-brands-square-github",
  },

  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/zsgomori/",
    icon: "i-fa6-brands-linkedin",
  },

  {
    label: "Twitter/X",
    link: "https://twitter.com/zsgomori",
    icon: "i-fa6-brands-square-x-twitter",
  },
];
</script>

<template>
  <footer class="flex items-center gap-x-6 py-6 pl-8">
    <NuxtLink
      v-for="{ icon, label, link } in LINKS"
      :key="label"
      :href="link"
      :aria-label="label"
      target="_blank"
      class="text-neutral-300 transition-colors duration-150 hover:text-neutral-100"
    >
      <span aria-hidden :class="[icon, 'h-5 w-5 md:h-6 md:w-6']" />
    </NuxtLink>
  </footer>
</template>
