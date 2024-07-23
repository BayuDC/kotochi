<script setup lang="ts">
const { data } = await useFetch<any>('/api/accounts');

const columns = [
  {
    key: 'no',
    label: 'No',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'price',
    label: 'Price',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: 'actions',
  },
];
</script>

<template>
  <div>
    <div class="flex justify-between py-3.5 border-b border-gray-200 dark:border-gray-700">
      <USelectMenu placeholder="Status" :options="['All', 'Sale', 'Sold']" />
      <UButton label="New Account" to="/account/new" />
    </div>

    <UTable :rows="data?.accounts" :columns="columns" class="py-10">
      <template #status-data="{ row }">
        <USelectMenu :model-value="row.status" :options="['Idle', 'Sale', 'Sold']" />
      </template>
      <template #actions-data="{ row }">
        <UButton size="xs" :to="'/account/' + row._id">Detail</UButton>
      </template>
    </UTable>
  </div>
</template>

<style scoped></style>
