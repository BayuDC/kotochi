<script setup lang="ts">
const props = defineProps<{
  options: any[];
  toggleAttribute: string;
}>();
const model = defineModel<any[]>();

function remove(target: any) {
  model.value = model.value?.filter(item => item.name != target.name);
}
</script>

<template>
  <UFormGroup>
    <div class="mb-2">
      <div v-for="item in model as any[]" class="flex items-center gap-2">
        <div class="h-2 w-2 rounded-full bg-green-500 dark:bg-green-400" />
        {{ item.name }}
        <UToggle class="ml-auto" label="Well Build" v-model="item[toggleAttribute]" />
        <UIcon
          name="i-heroicons-trash"
          class="text-gray-400 dark:text-gray-500 hover:dark:text-gray-100 hover:text-gray-900 cursor-pointer"
          @click="remove(item)"
        />
      </div>
    </div>
    <USelectMenu
      v-model="model"
      :options="options"
      searchable
      :search-attributes="['name']"
      multiple
      clear-search-on-close
    >
      <template #option="{ option }">{{ option.name }}</template>
    </USelectMenu>
  </UFormGroup>
</template>

<style scoped></style>
