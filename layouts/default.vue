<script setup lang="ts">
const links = [
  {
    label: 'Store',
    icon: 'i-heroicons-building-storefront',
    to: '/store',
  },
  {
    label: 'Setting',
    icon: 'i-heroicons-cog-6-tooth',
    to: '/setting',
  },
];
</script>

<template>
  <div>
    <div class="border-b border-gray-200 dark:border-gray-800">
      <UContainer class="flex items-center justify-between">
        <h1 class="text-xl font-bold">Shirayuki Store</h1>
        <div>
          <UHorizontalNavigation :links="links" />
        </div>
      </UContainer>
    </div>
    <div class="my-8">
      <UContainer>
        <slot />
      </UContainer>
    </div>
  </div>
</template>

<style scoped></style>
