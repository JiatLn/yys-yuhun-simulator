<template>
  <div flex-c flex-col py-10 h-full>
    <a-timeline style="height: inherit">
      <a-timeline-item v-for="(item, index) in updateLog" :key="index" :color="item.color">
        <p pb-2 text-gray-600>{{ item.date }}</p>
        <div w-520px shadow p-4 mr-4 rounded>
          <div pb-2 text-2xl>
            {{ item.title }}
          </div>
          <ul>
            <li v-for="(p, i) in item.content" :key="i" list-circle list-inside indent>
              {{ p }}
            </li>
          </ul>
        </div>
      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<script setup lang="ts">
  import updateLog from '@/data/updateLog.json';
</script>

<style scoped lang="scss">
  .ant-timeline {
    @apply ml-2 pt-2;
    @include scroll();
  }
</style>
