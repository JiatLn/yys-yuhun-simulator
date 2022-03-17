<template>
  <a-modal
    v-model:visible="visible"
    title="首领的御魂礼盒"
    centered
    :footer="null"
    width="1000px"
    :mask-closable="false"
    @cancel="onCancel"
  >
    <div class="yuhun-items">
      <div v-for="item in chiefYuhunSet" :key="item.id" flex-c flex-col>
        <div w-178px cursor-pointer @click="onClick(item.id)">
          <LazyImg :src="`/static/images/yuhun/${item.name}.png`" class="h-full" />
        </div>
        <div text-18px>{{ item.name }}</div>
      </div>
    </div>
    <ExchangeCheifSuit :show="showExchange" :suit-id="suitId" @close="showExchange = false" />
  </a-modal>
</template>

<script setup lang="ts">
  import { chiefYuhunSet } from '@/data/yuhunInfo';

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
    @apply h-520px grid grid-cols-3 gap-y-4 py-6 select-none;
  }
</style>
