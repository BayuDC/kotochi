<script setup lang="ts">
const no = ref('');
const adventureRank = ref('');
const birthdayStatus = ref('');
const mainCharacter = ref('');
const primo = ref(0);
const resin = ref(0);
const archonQuest = ref('');
const exploration = ref('');

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
      <UInput v-model="no" />
    </UFormGroup>
    <UFormGroup label="AR">
      <UInput v-model="adventureRank" />
    </UFormGroup>
    <UFormGroup label="BD">
      <USelectMenu v-model="birthdayStatus" :options="birthdayOptions" />
    </UFormGroup>
    <UFormGroup label="MC">
      <USelectMenu v-model="mainCharacter" :options="mainCharacterOptions" />
    </UFormGroup>
    <UFormGroup label="Primo">
      <UInput v-model="primo" />
    </UFormGroup>
    <UFormGroup label="Fragile Resin">
      <UInput v-model="resin" />
    </UFormGroup>
    <UFormGroup label="Archon Quest">
      <USelectMenu v-model="archonQuest" :options="archonQuestOptions" searchable />
    </UFormGroup>
    <UFormGroup label="Exploration"> <USelectMenu v-model="exploration" :options="explorationOptions" /> </UFormGroup>
  </div>
</template>

<style scoped></style>
