<template>
  <div flex-c :class="props.class">
    <img
      v-for="i in 6"
      :key="i"
      src="/src/assets/icons/level.png"
      :style="{ width: props.size + 'px' }"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    class?: string | string[];
    size?: number;
  }>();
</script>

<style scoped lang="scss"></style>
