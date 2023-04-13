/*
 * @Author: lzy-Jerry
 * @Date: 2023-03-20 22:12:44
 * @LastEditors: xiaohu
 * @LastEditTime: 2023-04-10 16:17:15
 * @Description:
 */
import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "./src/styles/index.less";`,
      },
    },
  },
  server: {
    port: 8080,
    open: true,
    proxy: {
      // "/api": {
      //   target: "http://xxx.com",
      //   changeOrigin: true,
      // rewrite: (path) => path.replace(/^\/api/, ""),
      // },
    },
  },
});
