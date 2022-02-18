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
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="px-[50px]">
      <a-breadcrumb class="my-[16px]">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="bg-white p-[24px] min-h-[calc(100vh-187px)]">
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer class="text-center">YYS Yuhun Simulator © 2022 JiatLn</a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup>
  const selectedKeys = ref<string[]>(['1']);
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
