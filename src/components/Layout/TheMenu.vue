<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" class="leading-[64px]">
    <a-menu-item v-for="item in routes" :key="item.name">
      <router-link :to="{ name: item.name }">{{ item.meta?.title }}</router-link>
    </a-menu-item>
  </a-menu>
</template>

<script setup lang="ts">
  import routes from '@/router/modules/common';
  import { useRoute } from 'vue-router';

  const selectedKeys = ref<string[]>([]);

  const route = useRoute();
  watch(
    () => route.name,
    () => {
      selectedKeys.value = [route.name as string];
    }
  );
</script>

<style scoped lang="scss"></style>
