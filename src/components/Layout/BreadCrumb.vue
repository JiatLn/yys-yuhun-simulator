<template>
  <a-breadcrumb class="my-[16px] px-[50px]">
    <a-breadcrumb-item href="" @click="router.push({ name: 'Home' })">
      <home-outlined />
      <!-- <span>YuhunStore</span> -->
    </a-breadcrumb-item>
    <a-breadcrumb-item>{{ route.meta.title }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup lang="ts">
  import { HomeOutlined } from '@ant-design/icons-vue';
  import { useRoute, useRouter } from 'vue-router';

  const router = useRouter();
  const route = useRoute();
</script>

<style scoped lang="scss"></style>
