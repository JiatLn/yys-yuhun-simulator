<template>
  <a-modal
    v-model:visible="visible"
    title=""
    centered
    :footer="null"
    :closable="false"
    :mask-closable="true"
    width="100%"
    wrap-class-name="full-modal"
    :style="{ padding: 0 }"
    @cancel="onCancel"
  >
    <div v-if="!!props.result" class="content" @click="onCancel">
      <div class="header">购买成功</div>
      <div flex-c space-x-30 relative>
        <section flex-c flex-col>
          <div w-180px cursor-pointer mb--30px pt-30px>
            <img :src="`/static/images/yuhun/${props.result?.suit.name}.png`" w-full />
          </div>
          <LevelCom :size="26" />
        </section>
        <section flex-c flex-col>
          <div flex-c space-x-4 pb-10>
            <div w-40px>
              <img :src="`/static/images/yuhun-mini/${props.result?.suit?.id}.png`" alt="" />
            </div>
            <div text-24px>{{ props.result?.suit.name }}</div>
            <AppIcon v-show="isLock" icon="tabler:lock" text-20px text-yellow-100 @click="onLock" />
            <AppIcon
              v-show="!isLock"
              icon="tabler:lock-open"
              text-20px
              text-yellow-100
              @click="onLock"
            />
          </div>
          <ul flex flex-col text-20px gap-1 font-medium>
            <li flex justify-between w-200px text-red-500>
              <div>
                {{ props.result?.mainAttr.label }}
              </div>
              <div>
                +{{ getValueWithFmt(props.result?.mainAttr.baseVal, props.result?.mainAttr.value) }}
              </div>
            </li>
            <li
              v-for="(item, index) in props.result?.randomAttrs"
              :key="index"
              flex
              justify-between
              w-200px
            >
              <div>{{ item.name }}</div>
              <div>+{{ getValueWithFmt(item.val, item.type) }}</div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
  import type { IGeneYuhun } from '@/core/geneYuhun';
  import { getValueWithFmt } from '@/core/geneYuhun';
  import useYuhunStore from '@/store/modules/useYuhunStore';

  const props = defineProps<{
    result: IGeneYuhun | null;
  }>();

  const visible = ref<boolean>(!!props.result);
  watch(
    () => !!props.result,
    (val) => {
      visible.value = val;
    }
  );

  const emits = defineEmits<{
    (e: 'close'): void;
  }>();

  const onCancel = () => {
    emits('close');
    visible.value = false;
    isLock.value = false;
  };

  const isLock = ref<boolean>(false);
  const yuhunStore = useYuhunStore();
  const onLock = (e: Event) => {
    e.stopPropagation();
    isLock.value = !isLock.value;
    yuhunStore.updateLock(props.result!.ulid);
  };
</script>

<style scoped lang="scss">
  .content {
    @apply flex-c flex-col h-full text-white select-none;
    font-family: '楷体';
    .header {
      @apply center text-yellow-200 text-60px font-black mb-10;
    }
  }
</style>

<style lang="scss">
  .full-modal {
    .ant-modal {
      max-width: 100%;
      top: 0;
      padding-bottom: 0;
      margin: 0;
    }
    .ant-modal-content {
      display: flex;
      flex-direction: column;
      height: calc(100vh);
      background-color: rgba($color: #000000, $alpha: 0.5);
    }
    .ant-modal-body {
      flex: 1;
    }
  }
</style>
