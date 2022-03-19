<template>
  <div h-full flex px-50px>
    <div h-full flex-1 flex>
      <div w-500px>
        <a-tabs v-model:activeTab="activeTab" type="card" h-full @tab-click="onTabClick">
          <a-tab-pane key="suit" tab="类型">
            <div v-if="!currentSuit" class="suit-items">
              <ShotSuit
                v-for="item in allYuhunSet"
                :key="item.id"
                :suit="item"
                @click="currentSuit = item.id"
              />
            </div>
            <div v-else class="yuhun-box" flex-c>
              <a-empty v-if="!yuhunList.length" :image="Empty.PRESENTED_IMAGE_SIMPLE">
                <template #description>
                  <p py-4 text-white>暂无该种类的御魂</p>
                  <a-button
                    text-white
                    mr-4
                    hover="text-black border-none "
                    @click="currentSuit = undefined"
                  >
                    返回
                  </a-button>
                  <a-button
                    text-white
                    hover="text-black border-none"
                    @click="router.push({ name: 'Home' })"
                  >
                    去赌魂
                  </a-button>
                </template>
              </a-empty>
              <div v-else class="yuhun-items">
                <ShotYuhun
                  v-for="item in yuhunList"
                  :key="item.ulid"
                  :yuhun="item"
                  :is-selected="item.ulid === currentYuhun?.ulid"
                  @yuhun-click="onPopoverClick"
                />
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="pos" tab="位置">
            <div class="yuhun-box" flex-col>
              <div flex items-center justify-around w-full h-40px my-2>
                <button
                  v-for="pos in positions"
                  :key="pos.val"
                  class="pos-btn"
                  :data-pos="pos.label"
                  transition="all 0.2s"
                  :class="{ active: currentPos === pos.val }"
                  @click="currentPos = pos.val"
                ></button>
              </div>
              <div v-if="yuhunListWithPos.length" class="yuhun-items">
                <ShotYuhun
                  v-for="item in yuhunListWithPos"
                  :key="item.ulid"
                  :yuhun="item"
                  :is-selected="item.ulid === currentYuhun?.ulid"
                  @yuhun-click="onPopoverClick"
                />
              </div>
              <a-empty v-else :image="Empty.PRESENTED_IMAGE_SIMPLE">
                <template #description>
                  <p py-4 text-white>暂无该位置的御魂</p>
                  <a-button
                    text-white
                    hover="text-black border-none"
                    @click="router.push({ name: 'Home' })"
                  >
                    去赌魂
                  </a-button>
                </template>
              </a-empty>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
    <div flex-1 flex-c flex-col>
      <div h-50px self-start self-center pt-20px text-20px flex gap-3>
        <a-popover placement="bottom" overlay-class-name="tips-popover">
          <template #content>
            <div text-16px>
              <p>※ 御魂数量：上锁 / 总数</p>
              <p>※ 点击右上角的【清空仓库】按钮可以清空仓库里面所有未上锁的御魂</p>
            </div>
          </template>
          <AppIcon icon="emojione:exclamation-question-mark" />
        </a-popover>
        <span>御魂数量：{{ yuhunStore.lockCount }}/{{ yuhunStore.yuhunCount }}</span>
      </div>
      <div flex-1 flex>
        <YuhunDetail v-if="currentYuhun" :yuhun="currentYuhun" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Empty } from 'ant-design-vue/es';
  import type { IGeneYuhun } from '@/core/geneYuhun';

  import { allYuhunSet } from '@/data/yuhunInfo';
  import useYuhunStore from '@/store/modules/useYuhunStore';
  import type { Pos } from '@/core/types';

  const router = useRouter();
  const yuhunStore = useYuhunStore();

  const activeTab = ref<string>('suit');
  const currentSuit = ref<number | undefined>(undefined);
  const currentPos = ref<Pos>(2);

  const onTabClick = () => {
    currentSuit.value = undefined;
    currentYuhun.value = undefined;
  };

  const yuhunList = computed((): IGeneYuhun[] => {
    if (!currentSuit.value) {
      return [];
    }
    return yuhunStore.getYuhunBySuitId(currentSuit.value);
  });

  const yuhunListWithPos = computed((): IGeneYuhun[] => {
    return yuhunStore.getYuhunByPos(currentPos.value);
  });

  const currentYuhun = ref<IGeneYuhun | undefined>(undefined);
  const onPopoverClick = (ulid: string) => {
    currentYuhun.value = yuhunStore.getYuhunByUlid(ulid);
  };

  const positions: {
    label: string;
    val: Pos;
  }[] = [
    {
      label: '壹',
      val: 1,
    },
    {
      label: '贰',
      val: 2,
    },
    {
      label: '叁',
      val: 3,
    },
    {
      label: '肆',
      val: 4,
    },
    {
      label: '伍',
      val: 5,
    },
    {
      label: '陆',
      val: 6,
    },
  ];
</script>

<style scoped lang="scss">
  .suit-items {
    @apply max-w-448px grid grid-cols-2 gap-2 bg-yellow-900 p-2 select-none;
    @include scroll();
    height: calc(100vh - 64px - 22px - 32px - 69px - 40px - 16px);
  }
  .yuhun-box {
    @apply max-w-448px bg-yellow-900 flex-c;
    height: calc(100vh - 64px - 22px - 32px - 69px - 40px - 16px);
    .yuhun-items {
      @apply h-full w-full grid grid-cols-4 auto-rows-max gap-2 bg-yellow-900 p-2 select-none;
      @include scroll();
    }
  }

  .pos-btn {
    @apply flex-c w-40px h-40px relative font-600;
    &::after {
      content: attr(data-pos);
      @apply w-40px h-40px rounded-full absolute flex-c;
    }
    &::before {
      content: '';
      @apply w-40px h-40px rounded-full bg-yellow-400 absolute;
      border-top-left-radius: 0;
    }
    &.active::before {
      @apply bg-red-400;
    }
    &:nth-child(2)::before {
      transform: rotate(-45deg);
    }
    &:nth-child(3)::before {
      transform: rotate(-90deg);
    }
    &:nth-child(4)::before {
      transform: rotate(180deg);
    }
    &:nth-child(5)::before {
      transform: rotate(135deg);
    }
    &:nth-child(6)::before {
      transform: rotate(90deg);
    }
  }

  ::v-global(.tips-popover .ant-popover-inner) {
    @apply bg-#cbb59d/60 rounded-lg;
    box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;
  }

  ::v-global(.ant-empty) {
    @apply flex-c flex-col h-full;
  }
</style>
