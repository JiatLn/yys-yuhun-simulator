<template>
  <div class="warpper *flex-center">
    <div class="pic w-[120px] pb-4">
      <img src="../assets/icons/icon-yuhun.png" class="w-full h-full" alt="" />
    </div>
    <LevelCom class="pb-4" />
    <div class="text-[22px] py-16px font-mono font-semibold">
      {{ props.title }}
    </div>
    <div class="footer *flex-center space-x-4">
      <div class="icon w-[36px] h-[36px]">
        <img :src="props.icon" alt="" class="h-full w-full" />
      </div>
      <div class="text-[16px] font-sans">{{ props.account }}/{{ props.unit }}</div>
      <div class="*yys-btn" @click="onExchange">兑换</div>
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
