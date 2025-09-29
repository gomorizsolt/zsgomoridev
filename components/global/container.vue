<script lang="ts">
type ContainerSize = "md" | "lg";

interface ContainerProps {
  size?: ContainerSize;
}
</script>

<script setup lang="ts">
const SIZE_STYLES: Record<ContainerSize, string> = {
  md: "max-w-3xl",
  lg: "max-w-5xl",
};

defineProps<ContainerProps>();
</script>

<template>
  <div :class="['mx-auto flex w-full flex-col px-6 py-14 lg:px-0', SIZE_STYLES[size ?? 'md']]">
    <slot />
  </div>
</template>
