<template>
  <div class="*flex-center flex-col select-none">
    <img class="w-[180px]" :src="`/static/images/yuhun/${props.yuhun.suit.name}.png`" />
    <div class="text-[24px] flex justify-between w-[300px] my-6">
      <span class="flex-1">强化等级</span>
      <div class="flex w-[140px] justify-between">
        <span>{{ props.yuhun.level }}</span>
        <AppIcon icon="eva:arrow-right-fill" class="text-red-400" />
        <span class="text-red-400 w-[20px] text-right">{{ nextLevel }}</span>
      </div>
    </div>
    <div class="bg-yellow-900 p-6 rounded-lg">
      <div class="flex justify-between text-[16px] mb-4 text-white">
        <span class="flex-1">{{ props.yuhun.mainAttr.label }}</span>
        <div class="flex justify-between w-[160px]">
          <span>
            +{{ getValueWithFmt(props.yuhun.mainAttr.baseVal, props.yuhun.mainAttr.value) }}
          </span>
          <AppIcon icon="eva:arrow-right-fill" class="text-red-400" />
          <span class="text-red-400 w-[40px] text-right">
            +{{
              getValueWithFmt(
                props.yuhun.mainAttr.baseVal + props.yuhun.mainAttr.levelStep * nextLevel,
                props.yuhun.mainAttr.value
              )
            }}
          </span>
        </div>
      </div>
      <ul class="grid grid-cols-2 gap-x-12 gap-y-0 h-[60px] mb-6 text-white">
        <li
          v-for="item in props.yuhun.randomAttrs"
          :key="item.type"
          class="flex justify-between w-[140px] text-[16px]"
        >
          <span>{{ item.name }}</span>
          <span>+{{ getValueWithFmt(item.val, item.type) }}</span>
        </li>
      </ul>
      <div class="flex justify-between items-center">
        <div class="level-grows flex gap-2">
          <button
            v-for="level in levels"
            :key="level"
            class="bg-yellow-400 h-8 w-8 rounded-lg"
            :class="{ 'bg-red-400': nextLevel === level }"
            @click="nextLevel = level"
          >
            {{ level }}
          </button>
        </div>
        <button class="*yys-btn float-right">强 化</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IGeneYuhun } from '@/core/geneYuhun';
  import { getValueWithFmt } from '@/core/geneYuhun';

  const props = defineProps<{
    yuhun: IGeneYuhun;
  }>();

  const levels = [3, 6, 9, 12, 15];
  const nextLevel = ref<number>(15);
</script>

<style scoped lang="scss"></style>
