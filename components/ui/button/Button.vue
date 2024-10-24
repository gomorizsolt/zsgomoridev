<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Primitive, type PrimitiveProps } from "radix-vue";
import { type ButtonVariants, buttonVariants } from ".";

interface ButtonProps extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
}

const { as = "button", class: _class = "", variant, size } = defineProps<ButtonProps>();

const mergedClasses = computed(() => mergeClasses(buttonVariants({
  variant,
  size,
}), _class));
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="mergedClasses">
    <slot />
  </Primitive>
</template>
