<script lang="ts" setup>
const PHOTOS = [
  {
    title: "OKT-22, 2024",
    description: "Hiking w/ GF",
    img: "/about/okt22.jpeg",
  },
  {
    title: "Rome, 2024",
    description: "At the Colosseum",
    img: "/about/rome.jpeg",
  },
  {
    title: "Riga, 2024",
    description: "Reppublika PI Planning",
    img: "/about/riga.jpeg",
  },
  {
    title: "Balaton, 2024",
    description: "Cycling w/ Mum",
    img: "/about/balaton.jpeg",
  },
  {
    title: "Debrecen, 2023",
    description: "Wizz Air Airport Run",
    img: "/about/wizzair.jpeg",
  },
];
</script>

<template>
  <div class="flex not-prose justify-center overflow-hidden gap-5 xl:gap-7 py-4 mb-40">
    <div
      v-for="({ title, description, img }, idx) in PHOTOS"
      :key="idx"
      :class="idx % 2 === 0 ? 'rotate-2' : '-rotate-2'"
      class="relative shrink-0 aspect-[9/10] w-44 group overflow-hidden rounded-xl transition-transform duration-300 hover:rotate-0 xl:w-72 xl:rounded-2xl"
    >
      <div class="absolute size-full bg-black z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-60" />

      <NuxtImg
        :src="img"
        :alt="title"
        format="webp"
        loading="lazy"
        placeholder
        sizes="400px xl:800px"
        class="absolute size-full object-center object-cover transform-gpu transition-transform duration-300 group-hover:scale-110"
      />

      <div class="absolute z-10 bottom-0 p-4 translate-y-20 transform-gpu transition-transform duration-300 group-hover:translate-y-0">
        <div class="text-base font-bold text-neutral-100 xl:text-xl">
          {{ title }}
        </div>

        <div class="text-neutral-300 text-xs xl:text-sm">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>
