<template>
  <div class="warpper h-full w-full *flex-center flex-col">
    <div class="entry-items flex space-x-[100px]">
      <EntryItem
        v-for="(item, index) in entryList"
        :key="index"
        :title="item.title"
        :unit="item.unit"
        :account="0"
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
  import chieftain from '@/assets/icons/chieftain.png';
  import water from '@/assets/icons/water.png';

  const entryList = [
    {
      title: '朴素的御魂礼盒',
      unit: 50,
      icon: purple,
      type: 'purple',
    },
    {
      title: '华丽的御魂礼盒',
      unit: 50,
      icon: golden,
      type: 'golden',
    },
    {
      title: '首领的御魂礼盒',
      unit: 50,
      icon: chieftain,
      type: 'chieftain',
    },
    {
      title: '海汐的御魂礼盒',
      unit: 200,
      icon: water,
      type: 'water',
    },
  ];

  const show = ref<Record<string, boolean>>({
    golden: false,
  });

  const onExchange = (type: string) => {
    show.value[type] = true;
    console.log(show.value);
  };
</script>

<style lang="scss" scoped>
  .warpper {
    background: url(../assets/icons/bg.png);
  }
</style>
