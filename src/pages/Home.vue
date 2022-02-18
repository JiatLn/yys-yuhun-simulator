<template>
  <div class="warpper h-full w-full flex flex-col justify-center items-center">
    <div class="content flex items-center gap-2">
      <section class="flex">
        <div class="box">
          <p>Windi css</p>
          <div class="text-red-400 uppercase">Home Page</div>
        </div>
      </section>
      <section class="flex">
        <div class="box">
          <p>Vue-router@4</p>
          <div class="btns flex justify-between space-x-4">
            <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
            <router-link class="btn" :to="{ name: 'Register' }">Register</router-link>
          </div>
        </div>
      </section>
      <section class="flex">
        <div class="box">
          <p>iconify</p>
          <AppIcon icon="flat-color-icons:home" class="text-[20px]" />
        </div>
      </section>
      <section class="flex">
        <div class="box">
          <p>Pinia</p>
          <span>isLogin: {{ userStore.isLogin() }}</span>
        </div>
      </section>
      <section class="flex">
        <div class="box">
          <p>TSX support</p>
        </div>
      </section>
    </div>
    <p class="mt-8 text-gray-400">This is a demo page, you can clear it and start coding~ :)</p>
  </div>
</template>

<script setup lang="ts">
  import AppIcon from '@/components/common/AppIcon.vue';
  import useUserStore from '@/store/modules/useUserStore';

  const userStore = useUserStore();
</script>

<style lang="scss" scoped>
  .box {
    @apply py-8 px-8 flex flex-col justify-center items-center bg-white
    rounded-xl shadow-md space-y-2;
  }

  .btn {
    @apply px-4 py-1 text-sm text-purple-600 font-semibold
    rounded-full border border-purple-200 dark:border-purple-800
    hover:text-white hover:bg-purple-600 hover:border-transparent
    focus:outline-none focus:ring-2 ring-purple-600 ring-opacity-40;
  }
</style>
