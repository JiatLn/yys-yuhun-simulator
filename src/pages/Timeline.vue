<template>
  <div class="*flex-center flex-col py-10 h-full">
    <a-timeline style="height: inherit">
      <a-timeline-item v-for="(item, index) in logs" :key="index" :color="item.color">
        <p class="pb-2 text-gray-600">{{ item.date }}</p>
        <div class="content w-[520px] shadow-lg border p-4 mr-4 rounded">
          <div class="title pb-2 text-2xl">
            {{ item.title }}
          </div>
          <ul>
            <li v-for="(p, i) in item.content" :key="i" class="list-circle list-inside indent">
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

  const logs = updateLog.reverse();
</script>

<style scoped lang="scss">
  .ant-timeline {
    @apply ml-2 pt-2;
    @include scroll();
  }
</style>
