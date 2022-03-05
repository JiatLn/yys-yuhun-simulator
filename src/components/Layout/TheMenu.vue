<template>
  <div class="flex">
    <div class="logo" @click="router.push({ name: 'Home' })">御魂の屋</div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      class="leading-[64px]"
    >
      <a-menu-item v-for="item in routes" :key="item.name">
        <router-link :to="{ name: item.name }">{{ item.meta?.title }}</router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
  import routes from '@/router/modules/common';
  import { useRoute, useRouter } from 'vue-router';

  const selectedKeys = ref<string[]>([]);

  const router = useRouter();
  const route = useRoute();
  watch(
    () => route.name,
    () => {
      selectedKeys.value = [route.name as string];
    }
  );
</script>

<style scoped lang="scss">
  .logo {
    @apply text-center px-2 h-full text-yellow-200 *flex-center text-[18px] mr-10 cursor-pointer;
  }
</style>
