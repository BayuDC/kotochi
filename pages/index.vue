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
    <div class="flex py-3.5 border-b border-gray-200 dark:border-gray-700 gap-2">
      <USelectMenu placeholder="Status" :options="['All', 'Sale', 'Sold']" />
      <USelectMenu placeholder="MC" :options="[]" />
      <USelectMenu placeholder="AR" :options="[]" />
      <USelectMenu placeholder="Story" :options="[]" />
      <USelectMenu placeholder="Explore" :options="[]" />
      <USelectMenu placeholder="Character" :options="[]" />
      <USelectMenu placeholder="Weapon" :options="[]" />
      <UButton class="ml-auto" label="New Account" to="/account/new" />
    </div>

    <UTable :rows="data?.accounts" :columns="columns" class="py-10">
      <template #name-data="{ row }">
        <div class="grid">
          <div class="truncate overflow-hidden">{{ row.name }}</div>
        </div>
      </template>
      <template #status-data="{ row }">
        <div class="w-20">
          <USelectMenu :model-value="row.status" :options="['Idle', 'Sale', 'Sold']" />
        </div>
      </template>
      <template #actions-data="{ row }">
        <div class="flex gap-2">
          <UButton size="xs" :to="'/account/' + row._id">Detail</UButton>
          <UButton
            size="xs"
            :to="'/api/accounts/export?id=' + row._id"
            :download="'Dagangan No ' + row.no"
            :external="true"
            >Export</UButton
          >
          <UButton
            size="xs"
            :to="`/api/accounts/export?id=${row._id}&alt=true`"
            :download="'Dagangan No ' + row.no + ' Alt'"
            :external="true"
            >Export 2</UButton
          >
        </div>
      </template>
    </UTable>
  </div>
</template>

<style scoped></style>
