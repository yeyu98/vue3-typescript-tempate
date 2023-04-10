/*
 * @Author: lzy-Jerry
 * @Date: 2023-03-20 22:12:44
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-03-22 22:24:03
 * @Description:
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.less';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

app.mount('#app');
