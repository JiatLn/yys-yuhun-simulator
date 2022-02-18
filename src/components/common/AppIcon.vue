<template>
  <div class="inline-flex justify-center items-center cursor-pointer" :class="props.class">
    <span class="iconify" :data-icon="props.icon"></span>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    icon: String;
    class?: string | string[];
  }>();
</script>

<style lang="scss" scoped>
  .iconify {
    color: inherit;
  }
</style>
