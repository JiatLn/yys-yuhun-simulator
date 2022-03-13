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
      <div flex-c flex-1 relative>
        <div w-180px cursor-pointer>
          <img :src="`/static/images/yuhun/${currSuit?.name}.png`" w-full />
        </div>
        <div class="pos-items">
          <div
            v-for="item in posOpts"
            :key="item.pos"
            class="pos-item"
            :class="{ active: currPos === item.pos }"
            @click="currPos = item.pos"
          >
            <img :src="`/static/images/yuhun-mini/${currSuit?.id}.png`" alt="" />
          </div>
        </div>
      </div>

      <div w-320px border-l>
        <div h-240px p-8 flex-c flex-col>
          <div class="mini-icon">
            <img :src="`/static/images/yuhun-mini/${currSuit?.id}.png`" alt="" />
          </div>
          <LevelCom pt-2 pb-4 />
          <div text-center opacity-50 text-16px mb-4>
            {{ currSuit?.name + (currPos > 0 ? '·' + posOpts[currPos - 1].label : '') }}
          </div>
          <div px-2 h-40px w-full>
            <p v-if="currPos > 0">
              {{ posOpts[currPos - 1].tips }}
            </p>
            <p v-else opacity-50 text-16px text-center>请选择购买御魂的位置</p>
          </div>
        </div>
        <div flex-c flex-col border-t flex-1 p-4>
          <div text-16px flex-1 space-y-1 self-start>
            <p>2件套属性：{{ currSuit?.suit2 }}</p>
            <p v-show="currSuit?.suit4.length">4件套属性：{{ currSuit?.suit4 }}</p>
          </div>
          <div yys-btn mt-20px @click="onExchange">兑换</div>
        </div>
      </div>
    </div>
  </a-modal>
  <ExchangeResult :result="showYuhun" @close="showYuhun = null" />
</template>

<script setup lang="ts">
  import type { IGeneYuhun } from '@/core/geneYuhun';
  import { geneYuhun } from '@/core/geneYuhun';
  import type { Pos } from '@/core/types';
  import { allYuhunSet, posOpts } from '@/data/yuhunInfo';
  import useAccountStore from '@/store/modules/useAccountStore';
  import useYuhunStore from '@/store/modules/useYuhunStore';
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

  const emits = defineEmits<{
    (e: 'close'): void;
  }>();

  const onCancel = () => {
    emits('close');
    currPos.value = 0;
    visible.value = false;
  };

  const yuhunStore = useYuhunStore();
  const showYuhun = ref<IGeneYuhun | null>(null);
  const accountStore = useAccountStore();
  const onExchange = () => {
    if (currPos.value === 0) {
      message.warning('请选择购买御魂的位置。');
      return;
    }
    accountStore.updateAccount('golden', -50);
    showYuhun.value = geneYuhun({
      suitId: props.suitId,
      pos: currPos.value,
    });
    yuhunStore.addYuhun(showYuhun.value);
  };
</script>

<style scoped lang="scss">
  .content {
    @apply flex h-440px bg-#472e2c text-white select-none;
    font-family: '楷体';

    .pos-items {
      @apply absolute left-1/2 top-1/2 grid gap-x-7 gap-y-14;
      transform: translate(-50%, -50%);
      grid-template-areas:
        '. one . . . six .'
        'two . . . . . five'
        '. three . . . four .';
      .pos-item {
        @apply w-70px h-70px rounded-1 relative cursor-pointer;
        &.active::before {
          content: '';
          @apply absolute top-0 left-0 w-70px h-70px rounded-full opacity-50 bg-white;
        }
        &::after {
          content: '';
          background: url(../assets/icons/yuhun-border.png) no-repeat;
          @apply absolute top-1/2 left-1/2 w-100px h-100px bg-contain;
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

    .mini-icon {
      @apply w-50px relative;
      &::after {
        content: '';
        background: url(../assets/icons/yuhun-border.png) no-repeat;
        @apply absolute top-1/2 left-1/2 w-70px h-70px bg-contain;
        transform: translate(-50%, -50%);
      }
    }
  }

  ::v-global(.ant-modal-body) {
    @apply p-0;
  }
</style>
