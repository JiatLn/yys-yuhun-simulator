<template>
  <div my-16px px-50px flex items-center gap-2>
    <div
      i-ant-design:home-filled
      cursor-pointer
      hover:text-blue-500
      @click="router.push({ name: 'Home' })"
    ></div>
    <span>·</span>
    <div>{{ route.meta.title }}</div>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter();
  const route = useRoute();
</script>

<style scoped lang="scss"></style>
