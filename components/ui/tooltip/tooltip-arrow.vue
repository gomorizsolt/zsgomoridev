<script setup lang="ts">
import { TooltipArrow, useForwardProps, type TooltipArrowProps } from "radix-vue";

const props = defineProps<TooltipArrowProps>();

const forwarded = useForwardProps(props);
</script>

<template>
  <TooltipArrow v-bind="forwarded" />
</template>
