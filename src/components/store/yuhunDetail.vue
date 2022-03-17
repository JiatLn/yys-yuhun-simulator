<template>
  <div flex-c flex-col select-none>
    <img w-180px :src="`/static/images/yuhun/${props.yuhun.suit.name}.png`" />
    <div text-24px flex justify-between w-300px my-6>
      <span flex-1>强化等级</span>
      <div flex w-140px justify-between>
        <span>{{ props.yuhun.level }}</span>
        <template v-if="props.yuhun.level < 15">
          <AppIcon icon="eva:arrow-right-fill" text-red-400 />
          <span text-red-400 w-20px text-right>{{ nextLevel }}</span>
        </template>
        <div v-else text-red-400>满</div>
      </div>
    </div>
    <div bg-yellow-900 p-6 rounded-lg>
      <div flex justify-between text-16px mb-4 text-white>
        <span flex-1>{{ props.yuhun.mainAttr.label }}</span>
        <div flex justify-between w-160px>
          <span>
            +{{
              getValueWithFmt(
                props.yuhun.mainAttr.baseVal + props.yuhun.level * props.yuhun.mainAttr.levelStep,
                props.yuhun.mainAttr.value
              )
            }}
          </span>
          <template v-if="props.yuhun.level < 15">
            <AppIcon icon="eva:arrow-right-fill" text-red-400 />
            <span text-red-400 w-40px text-right>
              +{{
                getValueWithFmt(
                  props.yuhun.mainAttr.baseVal + props.yuhun.mainAttr.levelStep * nextLevel,
                  props.yuhun.mainAttr.value
                )
              }}
            </span>
          </template>
          <div v-else text-red-400>已满级</div>
        </div>
      </div>
      <ul grid grid-cols-2 gap-x-12 gap-y-0 h-60px mb-6 text-white>
        <li
          v-for="item in yuhunStore.getAttrsByUlid(props.yuhun.ulid)"
          :key="item[0]"
          flex
          justify-between
          w-160px
          text-16px
        >
          <span>{{ AttrMap.get(item[0]) }}</span>
          <span>+{{ getValueWithFmt(item[1], item[0]) }}</span>
        </li>
      </ul>
      <div flex justify-between items-center>
        <div flex gap-2>
          <button
            v-for="level in levels"
            :key="level"
            h-8
            w-8
            rounded-lg
            :class="calcClassName(level)"
            @click="onLevelClick(level)"
          >
            {{ level }}
          </button>
        </div>
        <button v-if="props.yuhun.level !== 15" yys-btn float-right @click="onStrength">
          强 化
        </button>
        <button v-else yys-btn float-right @click="onReset">重 置</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IGeneYuhun } from '@/core/geneYuhun';
  import { getValueWithFmt } from '@/core/geneYuhun';
  import { AttrMap } from '@/data/translateMap';
  import useYuhunStore from '@/store/modules/useYuhunStore';
  import { notification } from 'ant-design-vue/es';

  const props = defineProps<{
    yuhun: IGeneYuhun;
  }>();

  const levels = [3, 6, 9, 12, 15];
  const nextLevel = ref<number>(15);

  const yuhunStore = useYuhunStore();

  function onStrength() {
    yuhunStore.levelUpYuhun(props.yuhun.ulid, nextLevel.value);
  }

  function onLevelClick(level: number) {
    if (level <= props.yuhun.level) return;
    nextLevel.value = level;
  }

  function calcClassName(level: number) {
    if (level <= props.yuhun.level) return 'bg-gray-500 text-white';
    return nextLevel.value === level ? 'bg-red-400' : 'bg-yellow-400';
  }

  function onReset() {
    let times = props.yuhun.resetTimes;
    if (times % 50 === 0 && times > 0) {
      notification.open({
        message: '阴阳师SAMA',
        description: `这御魂已经被你重置${times}次了，休息一下吧。`,
      });
    }
    yuhunStore.resetYuhun(props.yuhun.ulid);
  }
</script>

<style scoped lang="scss"></style>
