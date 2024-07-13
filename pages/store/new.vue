<script setup lang="ts">
const form = useAccountFormStore();
</script>

<template>
  <AccountInformation />
  <AccountSpecification />
  <AccountGenerated />
  <UDivider class="mb-4 mt-8" />
  <div class="flex gap-2">
    <UButton label="Generate" @click="form.generate" />
    <UButton label="Save" class="ml-auto" />
  </div>
</template>

<style scoped></style>
