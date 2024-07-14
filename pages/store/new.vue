<script setup lang="ts">
const store = useAccountStore();
</script>

<template>
  <AccountInformation />
  <AccountSpecification />
  <AccountGenerated />
  <UDivider class="mb-4 mt-8" />
  <div class="flex gap-2">
    <UButton label="Generate" @click="store.generate" />
    <UButton label="Save" class="ml-auto" />
  </div>
</template>

<style scoped></style>
