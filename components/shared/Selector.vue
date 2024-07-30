<script setup lang="ts">
const props = defineProps<{
  options: any[];
  toggleAttribute: string;
}>();
const model = defineModel<any[]>();

function remove(target: any) {
  model.value = model.value?.filter(item => item.name != target.name);
}
function rankUp(target: any) {
  if (!target.rank) {
    target.rank = 1;
  } else {
    target.rank++;
  }
}
function rankDown(target: any) {
  if (!target.rank || target.rank <= 1) {
    target.rank = undefined;
  } else {
    target.rank--;
  }
}
</script>

<template>
  <UFormGroup>
    <div class="mb-2">
      <div v-for="item in model as any[]" class="flex items-center gap-2">
        <div class="whitespace-nowrap flex items-center gap-2">
          <div class="block h-2 w-2 rounded-full bg-green-500 dark:bg-green-400" />
          {{ item.name }}
        </div>
        <span v-if="item.rank">({{ item.rank }})</span>
        <div class="w-full h-0.5 bg-green-400"></div>
        <!-- <div><UInput size="2xs" class="w-20" /></div> -->

        <div class="w-4 h-4">
          <UIcon
            name="i-heroicons-arrow-down"
            class="text-gray-400 dark:text-gray-500 hover:dark:text-gray-100 hover:text-gray-900 cursor-pointer"
            @click="rankDown(item)"
          />
        </div>

        <div class="w-4 h-4">
          <UIcon
            name="i-heroicons-arrow-up"
            class="text-gray-400 dark:text-gray-500 hover:dark:text-gray-100 hover:text-gray-900 cursor-pointer"
            @click="rankUp(item)"
          />
        </div>
        <UToggle class="" label="Well Build" v-model="item[toggleAttribute]" />

        <div class="w-4 h-4">
          <UIcon
            name="i-heroicons-trash"
            class="text-gray-400 dark:text-gray-500 hover:dark:text-gray-100 hover:text-gray-900 cursor-pointer"
            @click="remove(item)"
          />
        </div>
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
