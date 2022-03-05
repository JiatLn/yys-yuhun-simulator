<template>
  <div class="box">
    <div class="box-top">
      <div class="box-top__left">
        <div class="icon">
          <img :src="`/static/images/yuhun-mini/${props.yuhun.suit.id}.png`" alt="御魂图标" />
        </div>
        <div class="desc">
          <span>{{ props.yuhun.suit.name }} +15</span>
          <LevelCom :size="12" class="pb-0 py-[2px]" />
        </div>
      </div>
      <div class="box-top__right">{{ props.yuhun.pos }}号位</div>
    </div>

    <ul class="attrs">
      <li class="attr-item">
        <span>{{ props.yuhun.mainAttr.label }}</span>
        <span>+{{ props.yuhun.mainAttr.mainVal }}</span>
      </li>
      <li v-for="(item, i) in props.yuhun.randomAttrs" :key="i" class="attr-item">
        <span>{{ item.name }}</span>
        <span>+{{ getValueWithFmt(item.val, item.type, 0) }}</span>
      </li>
    </ul>
    <div class="feature">
      <span v-if="!props.yuhun.suit.isChief">2件套属性：{{ props.yuhun.suit.suit2 }}</span>
      <span v-else>固有属性：{{}}</span>
      <p>4件套效果：{{ props.yuhun.suit.suit4 }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { getValueWithFmt, IGeneYuhun } from '@/core/geneYuhun';
  import { round } from '@/utils/format';

  const props = defineProps<{
    yuhun: IGeneYuhun;
  }>();
</script>

<style lang="scss" scoped>
  .box {
    width: 232px;
    height: 300px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: #d6c9b9;
    box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;
    .box-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      .box-top__left {
        display: flex;
        align-items: center;
        .desc {
          display: flex;
          flex-direction: column;
        }
        .icon {
          width: 36px;
          height: 36px;
          margin-right: 16px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .attrs {
      height: 125px;
      display: flex;
      flex-direction: column;
      padding-bottom: 0.25rem;
      border-bottom: 1px solid #a68d70;
      .attr-item {
        width: 200px;
        height: 20px;
        color: #1e1e1e;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2px 0;
        font-size: 14px;
        &:first-child {
          color: #d96932;
        }
      }
    }
    .feature {
      padding-top: 8px;
      font-size: 14px;
      color: #777;
      display: flex;
      flex-direction: column;
      .zoom {
        span {
          margin-right: 8px;
        }
      }
    }
  }
</style>
