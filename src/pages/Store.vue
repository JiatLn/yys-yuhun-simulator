<template>
  <div class="content flex h-full px-[50px]">
    <div class="content__left flex-1 h-full">
      <a-tabs v-model:activeKey="activeKey" type="card" class="h-full" @tab-click="onTabClick">
        <a-tab-pane key="1" tab="类型">
          <ul v-if="!currentSuit" class="suit-items">
            <li
              v-for="item in allYuhunSet"
              :key="item.id"
              class="*flex-center h-[100px] border cursor-pointer bg-white border-4 border-yellow-500 relative shadow-lg"
              @click="currentSuit = item.id"
            >
              <span
                class="absolute right-0 top-0 from-red-600 to-transparent bg-gradient-to-l text-white w-8 text-center text-[12px] py-1"
              >
                {{ yuhunStore.getCountById(item.id) }}
              </span>
              <div class="item__left w-[72px] mx-[16px]">
                <img :src="`/static/images/yuhun/${item.name}.png`" alt="" class="w-full" />
              </div>

              <div class="item__right flex flex-col flex-1 space-y-1">
                <span class="text-[18px]">{{ item.name }}</span>
                <span>{{ AttrMap.get(item.type) || '单件属性' }}</span>
              </div>
            </li>
            <li class="*flex-center">
              <a-button type="primary">回到顶部</a-button>
            </li>
          </ul>
          <div v-else class="yuhun-box">
            <a-empty v-if="!yuhunList.length" :image="Empty.PRESENTED_IMAGE_SIMPLE">
              <template #description>
                <p class="text-white py-4">暂无该种类的御魂</p>
              </template>
            </a-empty>
            <ul v-else class="yuhun-items">
              <li
                v-for="item in yuhunList"
                :key="item.ulid"
                class="*flex-center flex-col h-[102px] border cursor-pointer bg-yellow-200 border-4 border-yellow-500 relative shadow-lg"
              >
                <a-popover
                  title=""
                  trigger="click"
                  placement="rightTop"
                  arrowPointAtCenter
                  destroyTooltipOnHide
                  overlayClassName="yuhun-popover"
                >
                  <template #content>
                    <YuhunItem v-if="item" :yuhun="item" />
                  </template>
                  <div class="*flex-center flex-col">
                    <div
                      class="level absolute top-0 left-0 from-black to-transparent bg-gradient-to-r text-white text-center w-[30px] text-[12px] py-1"
                    >
                      +0
                    </div>
                    <img
                      :src="`/static/images/yuhun-mini/${item.suit.id}.png`"
                      alt=""
                      class="w-[54px] pb-2"
                    />
                    <LevelCom :size="12" class="absolute bottom-1 pb-0" />
                    <div class="lock absolute top-0 right-0">
                      <AppIcon
                        v-show="item.isLock"
                        icon="tabler:lock"
                        class="text-[20px] text-red-600"
                        @click="(e) => onLock(e, item.ulid)"
                      />
                      <AppIcon
                        v-show="!item.isLock"
                        icon="tabler:lock-open"
                        class="text-[20px] text-gray-500"
                        @click="(e) => onLock(e, item.ulid)"
                      />
                    </div>
                  </div>
                </a-popover>
              </li>
            </ul>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="位置">Content of Tab Pane 2</a-tab-pane>
      </a-tabs>
    </div>
    <div class="content__right flex-1"></div>
  </div>
</template>

<script setup lang="ts">
  import type { IGeneYuhun } from '@/core/geneYuhun';
  import { AttrMap } from '@/data/translateMap';
  import { allYuhunSet } from '@/data/yuhunInfo';
  import useYuhunStore from '@/store/modules/useYuhunStore';
  import { Empty } from 'ant-design-vue/es';

  const activeKey = ref<string>('1');
  const yuhunStore = useYuhunStore();
  const currentSuit = ref<number | null>(null);
  const onTabClick = () => {
    currentSuit.value = null;
  };
  const yuhunList = computed((): IGeneYuhun[] => {
    if (!currentSuit.value) {
      return [];
    }
    return yuhunStore.getYuhunById(currentSuit.value);
  });
  const onLock = (e: Event, ulid: string) => {
    e.stopPropagation();
    yuhunStore.updateLock(ulid);
  };
</script>

<style scoped lang="scss">
  .suit-items {
    @apply max-w-[448px] grid grid-cols-2 gap-2 bg-yellow-900 p-2 select-none;
    @include scroll();
    height: calc(100vh - 64px - 22px - 32px - 69px - 40px - 16px);
  }
  .yuhun-box {
    @apply max-w-[448px] bg-yellow-900 *flex-center;
    height: calc(100vh - 64px - 22px - 32px - 69px - 40px - 16px);
    .yuhun-items {
      @apply h-full w-full grid grid-cols-4 auto-rows-max gap-2 bg-yellow-900 p-2 select-none;
      @include scroll();
    }
  }

  ::v-global(.yuhun-popover .ant-popover-inner) {
    box-shadow: none;
    background-color: transparent;
    border-bottom-color: #fff;
    border-left-color: #f50f0f;
  }
  ::v-global(.yuhun-popover .ant-popover-inner-content) {
    padding: 0;
  }
  ::v-global(.yuhun-popover .ant-popover-arrow) {
    border-bottom-color: #3a200d !important;
    border-left-color: #3a200d !important;
  }
</style>
