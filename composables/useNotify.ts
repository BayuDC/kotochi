export const useNotify = defineStore('notify', () => {
  const id = ref(0);
  const message = ref<string | null>(null);
  const timer = ref<NodeJS.Timeout | null>(null);
  const show = ref<boolean>(false);

  watch(message, () => {
    if (message.value) {
      id.value++;
      show.value = true;

      if (timer.value) clearTimeout(timer.value);
      timer.value = setTimeout(() => {
        show.value = false;
      }, 4000);
    }
  });

  function push(value: string) {
    message.value = value;
  }

  return { id, message, show, push };
});
