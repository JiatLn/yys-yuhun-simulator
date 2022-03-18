<template>
  <div flex-c gap-8 pr-8>
    <a-popover placement="bottom" overlay-class-name="sponsor-popover">
      <template #content>
        <p text-center pt-4 pb-2 text="16px #07c160">打开微信扫一扫</p>
        <LazyImg src="/src/assets/images/sponsor.jpg" w-260px />
      </template>
      <AppIcon icon="icomoon-free:coin-yen" text-24px text-light-50 cursor-pointer />
    </a-popover>
    <a href="https://github.com/JiatLn/yys-yuhun-simulator" target="__blank" flex>
      <AppIcon icon="akar-icons:github-fill" text-24px text-light-50 cursor-pointer />
    </a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  ::v-global(.sponsor-popover .ant-popover-inner) {
    box-shadow: none;
  }
  ::v-global(.sponsor-popover .ant-popover-inner-content) {
    padding: 0;
  }
</style>
