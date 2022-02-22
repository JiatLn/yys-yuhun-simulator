<template>
  <a-modal
    v-model:visible="visible"
    title=""
    centered
    :footer="null"
    width="900px"
    :mask-closable="true"
    :style="{ padding: 0 }"
    @cancel="onCancel"
  >
    <div class="content">
      <div class="left *flex-center flex-1">
        <div class="icon w-[200px] cursor-pointer">
          <img :src="`/src/assets/images/yuhun/${currSuit?.name}.png`" class="h-full" alt="" />
        </div>
      </div>

      <div class="right w-[320px] border-l">
        <div class="right__top h-[240px] p-8">
          <div class="level *flex-center pb-4">
            <img src="../assets/icons/level.png" alt="" />
            <img src="../assets/icons/level.png" alt="" />
            <img src="../assets/icons/level.png" alt="" />
            <img src="../assets/icons/level.png" alt="" />
            <img src="../assets/icons/level.png" alt="" />
            <img src="../assets/icons/level.png" alt="" />
          </div>
          <div v-if="currPos === 0" class="text-center">请选择购买御魂的位置</div>
          <div class="name">{{ currSuit?.name }}</div>
        </div>
        <div class="right__bottom *flex-center flex-col border-t flex-1 p-4">
          <div class="detail text-[16px] flex-1 space-y-1 self-start">
            <p>2件套属性：{{ currSuit?.suit2 }}</p>
            <p v-show="currSuit?.suit4.length">4件套属性：{{ currSuit?.suit4 }}</p>
          </div>
          <div class="*yys-btn mt-[20px]" @click="onExchange">兑换</div>
        </div>
      </div>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
  import { allYuhunSet } from '@/data/yuhunInfo';
  import useAccountStore from '@/store/modules/useAccountStore';
  import { message } from 'ant-design-vue/es';

  const props = defineProps<{
    show: boolean;
    suitId: number;
  }>();

  const currSuit = computed(() => {
    return allYuhunSet.find((item) => item.id === props.suitId);
  });
  const currPos = ref<number>(0);

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

  const accountStore = useAccountStore();
  const onExchange = () => {
    if (currPos.value === 0) {
      message.warning('请选择购买御魂的位置。');
      return;
    }
    accountStore.updateAccount('golden', -50);
  };
</script>

<style scoped lang="scss">
  .content {
    @apply flex h-[440px] bg-[#472e2c] text-white select-none;
    font-family: '楷体';
  }

  ::v-global(.ant-modal-body) {
    @apply p-0;
  }
</style>
