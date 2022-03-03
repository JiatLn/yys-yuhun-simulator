<template>
  <div class="warpper h-full w-full *flex-center flex-col">
    <div class="entry-items">
      <EntryItem
        v-for="(item, index) in entryList"
        :key="index"
        :title="item.title"
        :unit="item.unit"
        :account="accountStore[item.type]"
        :icon="item.icon"
        :type="item.type"
        @exchange="onExchange"
      />
      <ExchangeGolden :show="show.golden" @close="show.golden = false" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import purple from '@/assets/icons/purple.png';
  import golden from '@/assets/icons/golden.png';
  import chief from '@/assets/icons/chief.png';
  import water from '@/assets/icons/water.png';
  import type { ICurrencyType } from '@/store/modules/useAccountStore';
  import useAccountStore from '@/store/modules/useAccountStore';
  import { message } from 'ant-design-vue/es';

  const accountStore = useAccountStore();

  const entryList = ref<
    {
      title: string;
      unit: number;
      icon: string;
      type: ICurrencyType;
      account: number;
    }[]
  >([
    {
      title: '朴素的御魂礼盒',
      unit: 50,
      icon: purple,
      type: 'purple',
      account: accountStore.purple,
    },
    {
      title: '华丽的御魂礼盒',
      unit: 50,
      icon: golden,
      type: 'golden',
      account: accountStore.golden,
    },
    {
      title: '首领的御魂礼盒',
      unit: 50,
      icon: chief,
      type: 'chief',
      account: accountStore.chief,
    },
    {
      title: '海汐的御魂礼盒',
      unit: 200,
      icon: water,
      type: 'water',
      account: accountStore.water,
    },
  ]);

  const show = ref<Record<ICurrencyType, boolean>>({
    golden: false,
    water: false,
    purple: false,
    chief: false,
  });

  const onExchange = (type: ICurrencyType) => {
    if (['water', 'purple', 'chief'].includes(type)) {
      message.info('该功能呢暂未开放，敬请期待(#^.^#)');
      return;
    }
    show.value[type] = true;
  };
</script>

<style lang="scss" scoped>
  .warpper {
    background: url(../assets/icons/bg.png);
    .entry-items {
      @apply grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[100px] py-10;
      @include scroll();
    }
  }
</style>
