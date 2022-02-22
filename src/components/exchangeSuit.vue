<template>
  <a-modal
    v-model:visible="visible"
    :title="`金蛇皮 ${accountStore.golden}/50`"
    centered
    :footer="null"
    width="900px"
    :mask-closable="true"
    :style="{ padding: 0 }"
    @cancel="onCancel"
  >
    <div class="content">
      <div class="left *flex-center flex-1 relative">
        <div class="icon w-[180px] cursor-pointer">
          <img :src="`/src/assets/images/yuhun/${currSuit?.name}.png`" class="h-full" alt="" />
        </div>
        <div class="pos-items">
          <div
            v-for="item in posOpts"
            :key="item.pos"
            class="pos-item"
            :class="{ active: currPos === item.pos }"
            @click="currPos = item.pos"
          >
            <img :src="`/src/assets/images/yuhun-mini/${currSuit?.id}.png`" alt="" />
          </div>
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

          <div class="name text-center">{{ currSuit?.name }}</div>
          <div class="pos text-center">
            {{ currPos > 0 ? posOpts[currPos - 1].label : '请选择购买御魂的位置' }}
          </div>
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
  import { geneYuhun } from '@/core/geneYuhun';
  import type { Pos } from '@/core/types';
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
  const currPos = ref<Pos | 0>(0);

  const visible = ref<boolean>(props.show);
  watch(
    () => props.show,
    (val) => {
      visible.value = val;
    }
  );

  const posOpts = ref<{ pos: Pos; label: string }[]>([
    {
      pos: 1,
      label: '一号位',
    },
    {
      pos: 2,
      label: '二号位',
    },
    {
      pos: 3,
      label: '三号位',
    },
    {
      pos: 4,
      label: '四号位',
    },
    {
      pos: 5,
      label: '五号位',
    },
    {
      pos: 6,
      label: '六号位',
    },
  ]);

  const emits = defineEmits<{
    (e: 'close'): void;
  }>();

  const onCancel = () => {
    emits('close');
    currPos.value = 0;
    visible.value = false;
  };

  const accountStore = useAccountStore();
  const onExchange = () => {
    if (currPos.value === 0) {
      message.warning('请选择购买御魂的位置。');
      return;
    }
    accountStore.updateAccount('golden', -50);
    let newYuhun = geneYuhun({
      suitId: props.suitId,
      pos: currPos.value,
    });
    console.log(newYuhun);
  };
</script>

<style scoped lang="scss">
  .content {
    @apply flex h-[440px] bg-[#472e2c] text-white select-none;
    font-family: '楷体';
    .left {
      .pos-items {
        @apply absolute left-1/2 top-1/2 grid gap-x-7 gap-y-14;
        transform: translate(-50%, -50%);
        grid-template-areas:
          '. one . . . six .'
          'two . . . . . five'
          '. three . . . four .';
        .pos-item {
          @apply w-[70px] h-[70px] rounded-1 relative cursor-pointer;
          &.active::before {
            content: '';
            @apply absolute top-0 left-0 w-[70px] h-[70px] rounded-1 opacity-50 bg-white;
          }
          &::after {
            content: '';
            background: url(../assets/icons/yuhun-border.png) no-repeat;
            background-size: contain;
            @apply absolute top-1/2 left-1/2;
            width: 100px;
            height: 100px;
            transform: translate(-50%, -50%);
          }
          &:nth-child(1) {
            grid-area: one;
          }
          &:nth-child(2) {
            grid-area: two;
            &::after {
              transform: translate(-50%, -50%) rotate(-45deg);
            }
          }
          &:nth-child(3) {
            grid-area: three;
            &::after {
              transform: translate(-50%, -50%) rotate(-90deg);
            }
          }
          &:nth-child(4) {
            grid-area: four;
            &::after {
              transform: translate(-50%, -50%) rotate(180deg);
            }
          }
          &:nth-child(5) {
            grid-area: five;
            &::after {
              transform: translate(-50%, -50%) rotate(135deg);
            }
          }
          &:nth-child(6) {
            grid-area: six;
            &::after {
              transform: translate(-50%, -50%) rotate(90deg);
            }
          }
        }
      }
    }
  }

  ::v-global(.ant-modal-body) {
    @apply p-0;
  }
</style>
