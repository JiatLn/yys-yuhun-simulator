<template>
  <div class="warpper" flex-c>
    <div w-120px pb-4>
      <img src="../assets/icons/icon-yuhun.png" w-full h-full alt="" />
    </div>
    <LevelCom pb-4 />
    <div text-22px py-16px font-mono font-semibold>
      {{ props.title }}
    </div>
    <div flex-c space-x-4>
      <div w-36px h-36px>
        <img :src="props.icon" alt="" h-full w-full />
      </div>
      <div text-16px font-sans>{{ props.account }}/{{ props.unit }}</div>
      <div yys-btn @click="onExchange">兑换</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ICurrencyType } from '@/store/modules/useAccountStore';

  const props = defineProps<{
    title: string;
    icon: string;
    account: number;
    unit: number;
    type: ICurrencyType;
  }>();

  const emits = defineEmits<{
    (e: 'exchange', type: ICurrencyType): void;
  }>();

  const onExchange = () => {
    emits('exchange', props.type);
  };
</script>

<style scoped lang="scss">
  .warpper {
    @apply flex-col text-white select-none;
    font-family: '楷体';
  }
</style>
