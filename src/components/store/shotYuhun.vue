<template>
  <div
    flex-c
    flex-col
    h-102px
    border
    cursor-pointer
    border-4
    border-yellow-500
    relative
    shadow-lg
    :class="props.isSelected ? 'bg-green-200' : 'bg-yellow-200'"
    @click="onClick"
  >
    <a-popover
      title=""
      trigger="click"
      placement="rightTop"
      arrow-point-at-center
      destroy-tooltip-on-hide
      overlay-class-name="yuhun-popover"
    >
      <template #content>
        <YuhunItem v-if="props.yuhun" :yuhun="props.yuhun" />
      </template>
      <div flex-c flex-col w-full h-full>
        <div
          absolute
          top-0
          left-0
          from-black
          to-transparent
          bg-gradient-to-r
          text-white
          text-center
          w-30px
          text-12px
          py-1
        >
          +0
        </div>
        <img :src="`/static/images/yuhun-mini/${props.yuhun.suit.id}.png`" w-54px pb-2 />
        <LevelCom :size="12" absolute bottom-1 pb-0 />
        <div absolute top-0 right-0>
          <AppIcon
            v-show="props.yuhun.isLock"
            icon="tabler:lock"
            text-20px
            text-red-600
            @click="(e) => onLock(e, props.yuhun.ulid)"
          />
          <AppIcon
            v-show="!props.yuhun.isLock"
            icon="tabler:lock-open"
            text-20px
            text-gray-500
            @click="(e) => onLock(e, props.yuhun.ulid)"
          />
        </div>
      </div>
    </a-popover>
  </div>
</template>

<script setup lang="ts">
  import type { IGeneYuhun } from '@/core/geneYuhun';
  import useYuhunStore from '@/store/modules/useYuhunStore';

  const props = defineProps<{
    yuhun: IGeneYuhun;
    isSelected?: boolean;
  }>();

  const yuhunStore = useYuhunStore();
  const onLock = (e: Event, ulid: string) => {
    e.stopPropagation();
    yuhunStore.updateLock(ulid);
  };

  const emits = defineEmits<{
    (e: 'click', ulid: string): void;
  }>();
  const onClick = () => {
    emits('click', props.yuhun.ulid);
  };
</script>

<style scoped lang="scss">
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
