<script setup lang="ts">
const adventureRank = ref('');
const birthdayStatus = ref('');
const mainCharacter = ref('');
const primo = ref(0);
const archonQuest = ref('');
const exploration = ref('');
const limitCharacters = ref([]);

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
const limitCharacterOptions = [
  'Albedo',
  'Alhaitham',
  'Arlecchino',
  'Ayaka',
  'Ayato',
  'Baizhu',
  'Chiori',
  'Clorinde',
  'Cyno',
  'Eula',
  'Furina',
  'Ganyu',
  'Hu Tao',
  'Itto',
  'Kazuha',
  'Klee',
  'Kokomi',
  'Lyney',
  'Nahida',
  'Navia',
  'Neuvillette',
  'Nilou',
  'Raiden',
  'Shenhe',
  'Sigewinne',
  'Tartaglia',
  'Venti',
  'Wanderer',
  'Wriothesley',
  'Xianyun',
  'Xiao',
  'Yae Miko',
  'Yelan',
  'Yoimiya',
  'Zhongli',
];
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <UDivider class="col-span-3 mt-8" label="Basic Information" />
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
    <UFormGroup label="Archon Quest">
      <USelectMenu v-model="archonQuest" :options="archonQuestOptions" searchable />
    </UFormGroup>
    <UFormGroup label="Exploration"> <USelectMenu v-model="exploration" :options="explorationOptions" /> </UFormGroup>

    <UDivider class="col-span-3 mt-8" label="Character and Weapon" />
    <UFormGroup label="Limited Characters">
      <USelectMenu
        v-model="limitCharacters"
        :options="limitCharacterOptions"
        searchable
        multiple
        clear-search-on-close
      />
    </UFormGroup>
    <div>
      {{ limitCharacters }}
    </div>
  </div>
</template>

<style scoped></style>
