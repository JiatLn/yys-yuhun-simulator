<template>
  <a-layout class="layout">
    <a-layout-header class="flex justify-between">
      <TheMenu />
      <TheHeaderRight />
    </a-layout-header>
    <a-layout-content>
      <BreadCrumb />
      <div class="bg-white h-[calc(100vh-187px)]">
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer>
      <TheFooter />
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
