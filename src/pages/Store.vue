<template>
  <div h-full flex px-50px>
    <div h-full flex-1>
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
          <div v-else class="yuhun-box">
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
        <a-tab-pane key="pos" tab="位置"></a-tab-pane>
      </a-tabs>
    </div>
    <div flex-1 flex-c flex-col>
      <YuhunDetail v-if="currentYuhun" :yuhun="currentYuhun" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Empty } from 'ant-design-vue/es';
  import type { IGeneYuhun } from '@/core/geneYuhun';

  import { allYuhunSet } from '@/data/yuhunInfo';
  import useYuhunStore from '@/store/modules/useYuhunStore';

  const router = useRouter();
  const yuhunStore = useYuhunStore();

  const activeTab = ref<string>('suit');
  const currentSuit = ref<number | undefined>(undefined);

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

  const currentYuhun = ref<IGeneYuhun | undefined>(undefined);
  const onPopoverClick = (ulid: string) => {
    currentYuhun.value = yuhunStore.getYuhunByUlid(ulid);
  };
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
</style>
