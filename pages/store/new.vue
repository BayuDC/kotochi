<script setup lang="ts">
const store = useAccountStore();

onMounted(() => {
  store.data.status = 'Idle';
});
onUnmounted(() => {
  store.$reset();
});

async function save() {
  const { data } = await useFetch('/api/account', {
    method: 'post',
    body: store.data,
  });

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
