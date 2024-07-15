<script setup lang="ts">
const store = useAccountStore();

onMounted(() => {
  store.data.status = 'Idle';
});
onUnmounted(() => {
  store.$reset();
});
const { data, execute } = useFetch('/api/accounts', {
  method: 'post',
  body: store.data,
  watch: false,
  immediate: false,
});

async function save() {
  await execute();
  return navigateTo('/store');
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
