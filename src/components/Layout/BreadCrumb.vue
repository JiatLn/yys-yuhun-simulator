<template>
  <nav flex justify-between items-center px-50px>
    <div my-16px flex items-center gap-2>
      <div
        i-ant-design:home-filled
        cursor-pointer
        hover:text-blue-500
        @click="router.push({ name: 'Home' })"
      ></div>
      <span>·</span>
      <div>{{ route.meta.title }}</div>
    </div>
    <div><a-button danger ghost type="dashed" @click="clearYuhunStore">清空仓库</a-button></div>
  </nav>
</template>

<script setup lang="ts">
  import useYuhunStore from '@/store/modules/useYuhunStore';
  import { Modal } from 'ant-design-vue/es';

  const router = useRouter();
  const route = useRoute();

  const yuhunStore = useYuhunStore();
  function clearYuhunStore() {
    Modal.confirm({
      content: '确定清空仓库里的所有御魂吗？',
      onOk() {
        yuhunStore.clearYuhunStore();
        Modal.destroyAll();
      },
      okText: '是的',
      cancelText: '我再想想吧',
      onCancel() {
        Modal.destroyAll();
      },
    });
  }
</script>

<style scoped lang="scss"></style>
