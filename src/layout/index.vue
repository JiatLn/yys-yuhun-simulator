<template>
  <a-layout>
    <a-layout-header flex justify-between>
      <TheMenu />
      <TheHeaderRight />
    </a-layout-header>
    <a-layout-content>
      <BreadCrumb />
      <div class="h-[calc(100vh-64px-32px-21px-53px)]" bg-white>
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer py-16px>
      <TheFooter />
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
