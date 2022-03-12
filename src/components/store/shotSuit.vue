<template>
  <div
    class="*flex-center h-[100px] border cursor-pointer bg-white border-4 border-yellow-500 relative shadow-lg"
  >
    <span
      class="absolute right-0 top-0 from-red-600 to-transparent bg-gradient-to-l text-white w-8 text-center text-[12px] py-1"
    >
      {{ yuhunStore.getCountById(props.suit.id) }}
    </span>
    <div class="item__left w-[72px] mx-[16px]">
      <img :src="`/static/images/yuhun/${props.suit.name}.png`" alt="" class="w-full" />
    </div>

    <div class="item__right flex flex-col flex-1 space-y-1">
      <span class="text-[18px]">{{ props.suit.name }}</span>
      <span>{{ AttrMap.get(props.suit.type) || '单件属性' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { AttrMap } from '@/data/translateMap';
  import type { IYuhun } from '@/core/types';
  import useYuhunStore from '@/store/modules/useYuhunStore';

  const yuhunStore = useYuhunStore();
  const props = defineProps<{
    suit: IYuhun;
  }>();
</script>

<style scoped lang="scss"></style>
