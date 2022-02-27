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
      title: '仓库',
    },
  },
];

export default routes;
