<template>
  <div class="box">
    <div flex justify-between items-center mb-8px>
      <div flex>
        <div w-36px h-36px mr-16px>
          <img :src="`/static/images/yuhun-mini/${props.yuhun.suit.id}.png`" w-full h-full />
        </div>
        <div flex flex-col>
          <span>{{ props.yuhun.suit.name }}</span>
          <LevelCom :size="12" />
        </div>
      </div>
      <div text-16px>{{ props.yuhun.pos }}号位</div>
    </div>

    <ul class="attrs">
      <li class="attr-item">
        <span>{{ props.yuhun.mainAttr.label }}</span>
        <span>
          +{{
            getValueWithFmt(
              props.yuhun.mainAttr.baseVal + props.yuhun.mainAttr.levelStep * props.yuhun.level,
              props.yuhun.mainAttr.value
            )
          }}
        </span>
      </li>
      <li
        v-for="item in yuhunStore.getAttrsByUlid(props.yuhun.ulid)"
        :key="item[0]"
        class="attr-item"
      >
        <span>{{ AttrMap.get(item[0]) }}</span>
        <span>+{{ getValueWithFmt(item[1], item[0]) }}</span>
      </li>
    </ul>

    <div pt-8px text-14px flex flex-col leading-5 class="text-#777">
      <template v-if="props.yuhun.suit.isChief">
        <span>固有属性：{{ props.yuhun.singleAttr?.name }}{{ props.yuhun.singleAttr?.val }}%</span>
        <p>2件套效果：{{ props.yuhun.suit.suit2 }}</p>
      </template>
      <template v-else>
        <p>2件套属性：{{ props.yuhun.suit.suit2 }}</p>
        <p>4件套效果：{{ props.yuhun.suit.suit4 }}</p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IGeneYuhun } from '@/core/geneYuhun';
  import { getValueWithFmt } from '@/core/geneYuhun';
  import { AttrMap } from '@/data/translateMap';
  import useYuhunStore from '@/store/modules/useYuhunStore';

  const props = defineProps<{
    yuhun: IGeneYuhun;
  }>();

  const yuhunStore = useYuhunStore();
</script>

<style lang="scss" scoped>
  .box {
    @apply w-232px min-h-300px flex flex-col p-16px bg-#d6c9b9;
    box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;
    .attrs {
      @apply h-125px flex flex-col border-t border-b my-1 border-#a68d70;
      .attr-item {
        @apply w-200px h-20px text-#1e1e1e flex justify-between items-center my-2px text-14px;
        &:first-child {
          color: #d96932;
        }
      }
    }
  }
</style>
