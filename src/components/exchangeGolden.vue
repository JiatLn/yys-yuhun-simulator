<template>
  <a-modal
    v-model:visible="visible"
    title="华丽的御魂礼盒"
    centered
    :footer="null"
    width="1000px"
    :mask-closable="false"
    @cancel="onCancel"
  >
    <div class="yuhun-items">
      <div v-for="item in yuhunInfo" :key="item.id" class="yuhunItem *flex-center flex-col">
        <div class="icon w-[120px] cursor-pointer" @click="onClick(item.id)">
          <img :src="`/src/assets/images/yuhun/${item.name}.png`" class="h-full" alt="" />
        </div>
        <div class="name text-[16px]">
          {{ item.name }}
        </div>
      </div>
    </div>
    <ExchangeSuit :show="showExchange" :suit-id="suitId" @close="showExchange = false" />
  </a-modal>
</template>

<script setup lang="ts">
  import { yuhunInfo } from '@/data/yuhunInfo';

  const props = defineProps<{
    show: boolean;
  }>();

  const visible = ref<boolean>(props.show);
  watch(
    () => props.show,
    (val) => {
      visible.value = val;
    }
  );

  const emits = defineEmits<{
    (e: 'close'): void;
  }>();

  const onCancel = () => {
    emits('close');
    visible.value = false;
  };

  const suitId = ref<number>(0);
  const showExchange = ref<boolean>(false);

  const onClick = (id: number) => {
    suitId.value = id;
    showExchange.value = true;
  };
</script>

<style scoped lang="scss">
  .yuhun-items {
    @include scroll();
    @apply h-[520px] grid grid-cols-5 gap-y-4 grid-cols-5 py-6;
  }
</style>
