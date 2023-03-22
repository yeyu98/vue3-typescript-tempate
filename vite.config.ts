/*
 * @Author: lzy-Jerry
 * @Date: 2023-03-20 22:12:44
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-03-22 22:26:06
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
});
