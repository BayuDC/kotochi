<script setup lang="ts">
const store = useAccountStore();
</script>

<template>
  <UDivider class="mb-4 mt-8" label="Generated Value" />
  <div class="grid grid-cols-4 gap-4">
    <UFormGroup label="Name" class="col-span-3">
      <UInput disabled :model-value="store.data.name" />
    </UFormGroup>
    <UFormGroup label="Price">
      <UInput disabled :model-value="store.data.price" />
    </UFormGroup>
    <UFormGroup label="Description" class="col-span-4">
      <UTextarea :model-value="store.data.description" disabled size="xl" :rows="30" />
    </UFormGroup>
  </div>
</template>

<style scoped></style>
