<script setup lang="ts">
const form = useAccountFormStore();

const description = ref('');
</script>

<template>
  <UDivider class="mb-4 mt-8" label="Generated Value" />
  <div class="grid grid-cols-4 gap-4">
    <UFormGroup label="Name" class="col-span-3">
      <UInput v-model="form.generated.name" disabled />
    </UFormGroup>
    <UFormGroup label="Price">
      <UInput v-model="form.generated.price" disabled />
    </UFormGroup>
    <UFormGroup label="Description" class="col-span-4">
      <UTextarea v-model="description" disabled />
    </UFormGroup>
  </div>
</template>

<style scoped></style>
