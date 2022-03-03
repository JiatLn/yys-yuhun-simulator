<template>
  <div class="logo" @click="router.push({ name: 'Home' })">御魂Store</div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();
</script>

<style scoped lang="scss">
  .logo {
    @apply text-white text-center w-[120px] h-full float-left bg-yellow-400 *flex-center text-[18px] mr-20 cursor-pointer;
  }
</style>
