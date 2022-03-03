<template>
  <a-layout class="layout">
    <a-layout-header>
      <TheLogo />
      <TheMenu />
    </a-layout-header>
    <a-layout-content>
      <BreadCrumb />
      <div class="bg-white h-[calc(100vh-187px)]">
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer class="text-center">YYS Yuhun Simulator © 2022 JiatLn</a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
