<template>
  <div class="*flex-center flex-col text-white select-none">
    <div class="pic w-[120px] pb-4">
      <img src="../assets/icons/icon-yuhun.png" class="w-full h-full" alt="" />
    </div>
    <div class="level *flex-center pb-4">
      <img src="../assets/icons/level.png" alt="" />
      <img src="../assets/icons/level.png" alt="" />
      <img src="../assets/icons/level.png" alt="" />
      <img src="../assets/icons/level.png" alt="" />
      <img src="../assets/icons/level.png" alt="" />
      <img src="../assets/icons/level.png" alt="" />
    </div>
    <div class="text-[22px] py-10px font-mono font-semibold">
      {{ props.title }}
    </div>
    <div class="footer *flex-center space-x-2">
      <div class="icon w-[36px] h-[36px]">
        <img :src="props.icon" alt="" class="h-full w-full" />
      </div>
      <div>{{ props.account }}/{{ props.unit }}</div>
      <div
        class="btn bg-[#f3b25e] text-black shadow-lg py-2 px-5 text-[16px] cursor-pointer rounded border-orange-600 border-2"
        @click="onExchange"
      >
        兑 换
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string;
    icon: string;
    account: number;
    unit: number;
    type: string;
  }>();

  const emits = defineEmits<{
    (e: 'exchange', type: string): void;
  }>();

  const onExchange = () => {
    emits('exchange', props.type);
  };
</script>

<style scoped lang="scss"></style>
