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
      <div class="header center text-[#e8d799] text-[60px] font-black mb-10">购买成功</div>
      <div class="main-content *flex-center space-x-30 relative">
        <!-- <button class="absolute text-[40px] border-r bg-yellow-300 right-[-10px] bottom-[-30px]">
          强化
        </button> -->
        <section class="*flex-center flex-col">
          <div class="w-[180px] cursor-pointer mb-[-30px] pt-[30px]">
            <img
              :src="`/src/assets/images/yuhun/${props.result?.suit.name}.png`"
              class="w-full"
              alt=""
            />
          </div>
          <LevelCom :size="26" />
        </section>
        <section class="*flex-center flex-col">
          <div class="right—header *flex-center space-x-4 pb-10">
            <div class="w-[40px]">
              <img :src="`/src/assets/images/yuhun-mini/${props.result?.suit?.id}.png`" alt="" />
            </div>
            <div class="text-[24px]">
              {{ props.result?.suit.name }}
            </div>
            <!-- <AppIcon
              icon="fluent:paint-brush-arrow-down-24-filled"
              class="text-[20px] text-yellow-100"
            /> -->
            <AppIcon
              v-show="isLock"
              icon="tabler:lock"
              class="text-[20px] text-yellow-100"
              @click="onLock"
            />
            <AppIcon
              v-show="!isLock"
              icon="tabler:lock-open"
              class="text-[20px] text-yellow-100"
              @click="onLock"
            />
          </div>
          <ul class="flex flex-col text-[20px] gap-2 font-medium">
            <li class="flex justify-between w-[200px] text-red-500">
              <div class="name">
                {{ props.result?.mainAttr.label }}
              </div>
              <div class="val">+{{ props.result?.mainAttr.mainVal }}</div>
            </li>
            <li
              v-for="(item, index) in props.result?.randomAttrs"
              :key="index"
              class="flex justify-between w-[200px]"
            >
              <div class="name">{{ item.name }}</div>
              <div class="val">+{{ getValueWithFmt(item.val, item.type, 0) }}</div>
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
    @apply *flex-center flex-col h-full text-white select-none;
    font-family: '楷体';
    .header {
      text-shadow: 5px 5px 5px #a68752;
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
