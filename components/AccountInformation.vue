<script setup lang="ts">
const store = useAccountStore();

const birthdayOptions = ['SET', 'UNSET'];
const mainCharacterOptions = ['Male Aether', 'Female Lumine'];
const archonQuestOptions = [
  'Mondstadt Bagian 1',
  'Mondstadt Bagian 2',
  'Mondstadt Bagian 3',
  'Liyue Bagian 1',
  'Liyue Bagian 2',
  'Liyue Bagian 3',
  'Liyue Bagian 4',
  'Inazuma Bagian 1',
  'Inazuma Bagian 2',
  'Inazuma Bagian 3',
  'Inazuma Bagian 4',
  'Sumeru Bagian 1',
  'Sumeru Bagian 2',
  'Sumeru Bagian 3',
  'Sumeru Bagian 4',
  'Sumeru Bagian 5',
  'Sumeru Bagian 6',
  'Fontaine Bagian 1',
  'Fontaine Bagian 2',
  'Fontaine Bagian 3',
  'Fontaine Bagian 4',
  'Fontaine Bagian 5',
  'Fontaine Bagian 6',
];
const explorationOptions = ['Low Explore', 'Mid Explore', 'High Explore'];
</script>

<template>
  <UDivider class="mb-4 mt-8" label="Basic Information" />
  <div class="grid grid-cols-4 gap-4">
    <UFormGroup label="No">
      <UInput v-model="store.data.no" />
    </UFormGroup>
    <UFormGroup label="Username">
      <UInput v-model="store.data.username" />
    </UFormGroup>
    <UFormGroup label="Email">
      <UInput v-model="store.data.email" />
    </UFormGroup>
    <UFormGroup label="Password">
      <UInput v-model="store.data.password" />
    </UFormGroup>
    <UFormGroup label="ID">
      <UInput v-model="store.data.gameId" />
    </UFormGroup>
    <UFormGroup label="AR">
      <UInput v-model="store.data.ar" />
    </UFormGroup>
    <UFormGroup label="BD">
      <USelectMenu v-model="store.data.bd" :options="birthdayOptions" />
    </UFormGroup>
    <UFormGroup label="MC">
      <USelectMenu v-model="store.data.mc" :options="mainCharacterOptions" />
    </UFormGroup>
    <UFormGroup label="Primo">
      <UInput v-model="store.data.primo" />
    </UFormGroup>
    <UFormGroup label="Fragile Resin">
      <UInput v-model="store.data.resin" />
    </UFormGroup>
    <UFormGroup label="Archon Quest">
      <USelectMenu v-model="store.data.archonQuest" :options="archonQuestOptions" searchable />
    </UFormGroup>
    <UFormGroup label="Exploration">
      <USelectMenu v-model="store.data.exploration" :options="explorationOptions" />
    </UFormGroup>
  </div>
</template>

<style scoped></style>
