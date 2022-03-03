import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      title: '秘魂屋',
    },
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('@/pages/Store.vue'),
    meta: {
      title: '仓 库',
    },
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('@/pages/Timeline.vue'),
    meta: {
      title: '时间线',
    },
  },
];

export default routes;
