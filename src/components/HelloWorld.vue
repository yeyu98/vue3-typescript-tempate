<!--
 * @Author: xiaohu
 * @Date: 2023-04-10 14:13:14
 * @LastEditors: xiaohu
 * @LastEditTime: 2023-04-10 15:17:00
 * @FilePath: \vue3-typescript-tempate\src\components\HelloWorld.vue
 * @Description:
-->
<script setup lang="ts">
import { useCounter } from '@/stores/index';

defineProps<{ msg: string }>();

const counterStore = useCounter();

const handleClick = () => {
  let count = counterStore.counter;
  count++;
  counterStore.setCounter(count);
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="handleClick">count is {{ counterStore.counter }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
