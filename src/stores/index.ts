import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounter = defineStore('counter', () => {
  const counter = ref<number>(0);

  const setCounter = (value: number) => {
    counter.value = value;
  };

  return {
    counter,
    setCounter,
  };
});
