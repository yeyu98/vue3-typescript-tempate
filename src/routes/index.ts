import type { RouteRecordRaw } from 'vue-router';

// NOTE 这里使用RouteRecordRaw是为了使用时可以提示，但有个不确定的地方在于这里的component竟然是可选的
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
  },
];
export default routes;
