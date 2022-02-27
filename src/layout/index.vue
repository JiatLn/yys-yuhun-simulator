<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo">御魂模拟器</div>

      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        class="line-height-[64px]"
      >
        <a-menu-item key="Home">
          <router-link :to="{ name: 'Home' }">秘魂屋</router-link>
        </a-menu-item>
        <a-menu-item key="Store">
          <router-link :to="{ name: 'Store' }">仓库</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="px-[50px]">
      <a-breadcrumb class="my-[16px]">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="bg-white h-[calc(100vh-187px)]">
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer class="text-center">YYS Yuhun Simulator © 2022 JiatLn</a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup>
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

<style lang="scss" scoped>
  .logo {
    float: left;
    width: 120px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }
</style>
