<script setup lang="ts">
const { data } = await useFetch<any>('/api/accounts');

const store = ref('Shirayuki Store');
const columns = computed(() => [
  {
    key: 'no',
    label: 'No',
  },
  {
    key: store.value == 'Shirayuki Store' ? 'name' : 'name2',
    label: 'Name',
  },
  {
    key: 'price',
    label: 'Price',
  },
  {
    key: 'ads',
    label: 'Ads',
  },
  {
    key: 'actions',
  },
]);
</script>

<template>
  <div>
    <div class="flex py-3.5 border-b border-gray-200 dark:border-gray-700 gap-2">
      <USelectMenu class="w-40" placeholder="Store" :options="['Shirayuki Store', 'Pecinta Kopi']" v-model="store" />
      <UButton class="ml-auto" label="New Account" to="/account/new" />
    </div>

    <UTable :rows="data?.accounts" :columns="columns" class="py-10">
      <template #name-data="{ row }">
        <div class="grid">
          <div class="truncate overflow-hidden">{{ row.name }}</div>
        </div>
      </template>
      <template #name2-data="{ row }">
        <div class="grid">
          <div class="truncate overflow-hidden">{{ row.name2 }}</div>
        </div>
      </template>
      <template #actions-data="{ row }">
        <div class="flex gap-2">
          <UButton size="xs" :to="'/account/' + row._id">Detail</UButton>
          <UButton
            size="xs"
            :to="`/api/accounts/export?id=${row._id}${store == 'Pecinta Kopi' ? '&alt=true' : ''}`"
            :download="`Dagangan No ${row.no}${store == 'Pecinta Kopi' ? ' Alt' : ''}`"
            :external="true"
            >Export</UButton
          >
        </div>
      </template>
    </UTable>
  </div>
</template>

<style scoped></style>
