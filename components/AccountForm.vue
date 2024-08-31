<script setup lang="ts">
const props = defineProps<{
  id?: string;
}>();

const store = useAccountStore();
const notify = useNotify();

if (props.id) {
  const { data } = await useFetch<any>('/api/accounts', {
    key: 'find-account',
    query: {
      id: props.id,
    },
  });
  if (!data.value) throw createError({ statusCode: 404 });

  Object.assign(store.data, data.value?.account);
  useHead({
    title: `Account ${store.data.no} - Kotochi Store`,
  });
} else {
  store.data.status = 'Idle';
}

const { execute } = useFetch('/api/accounts', {
  key: 'save-account',
  method: 'post',
  body: store.data,
  query: { id: props.id },
  watch: false,
  immediate: false,
});

onUnmounted(() => {
  clearNuxtData(['find-account', 'save-account']);
  store.$reset();
});

async function save() {
  await execute();
  notify.push('Saved successfully!');
}
</script>

<template>
  <AccountInformation />
  <AccountSpecification />
  <AccountGenerated />
  <UDivider class="mb-4 mt-8" />
  <div class="flex gap-2">
    <UButton label="Generate" @click="store.generate" />
    <UButton label="Save" @click="save" class="ml-auto" />
  </div>
</template>

<style scoped></style>
