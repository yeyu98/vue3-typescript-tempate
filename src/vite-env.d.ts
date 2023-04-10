/// <reference types="vite/client" />
// TODO 这里目前不知道什么意思后续查
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
