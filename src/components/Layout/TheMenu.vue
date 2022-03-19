<template>
  <div class="flex">
    <div class="logo" @click="router.push({ name: 'Home' })">御魂の屋</div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      leading-64px
      min-w-400px
    >
      <a-menu-item v-for="item in routes" :key="item.name">
        <router-link :to="{ name: item.name }">{{ item.meta?.title }}</router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
  import routes from '@/router/modules/common';

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
    @apply text-center px-2 h-full text-yellow-200 flex-c text-18px mr-10 cursor-pointer;
  }
</style>
