<script setup lang="ts">
interface Character {
  name: string;
  isWellBuild?: boolean;
}
interface Weapon {
  name: string;
}

const limitedCharacters = ref<Character[]>([]);
const standardCharacters = ref<Character[]>([]);
const limitedWeapons = ref<Weapon[]>([]);
const standardWeapons = ref<Weapon[]>([]);

const limitedCharacterOptions: Character[] = [
  { name: 'Albedo' },
  { name: 'Alhaitham' },
  { name: 'Arlecchino' },
  { name: 'Ayaka' },
  { name: 'Ayato' },
  { name: 'Baizhu' },
  { name: 'Chiori' },
  { name: 'Clorinde' },
  { name: 'Cyno' },
  { name: 'Eula' },
  { name: 'Furina' },
  { name: 'Ganyu' },
  { name: 'Hu Tao' },
  { name: 'Itto' },
  { name: 'Kazuha' },
  { name: 'Klee' },
  { name: 'Kokomi' },
  { name: 'Lyney' },
  { name: 'Nahida' },
  { name: 'Navia' },
  { name: 'Neuvillette' },
  { name: 'Nilou' },
  { name: 'Raiden' },
  { name: 'Shenhe' },
  { name: 'Sigewinne' },
  { name: 'Tartaglia' },
  { name: 'Venti' },
  { name: 'Wanderer' },
  { name: 'Wriothesley' },
  { name: 'Xianyun' },
  { name: 'Xiao' },
  { name: 'Yae Miko' },
  { name: 'Yelan' },
  { name: 'Yoimiya' },
  { name: 'Zhongli' },
];

const standardCharacterOptions: Character[] = [
  { name: 'Dehya' },
  { name: 'Diluc' },
  { name: 'Jean' },
  { name: 'Keqing' },
  { name: 'Mona' },
  { name: 'Qiqi' },
  { name: 'Tighnari' },
];

const limitedWeaponOptions: Weapon[] = [
  { name: 'A Thousand Floating Dreams' },
  { name: 'Absolution' },
  { name: 'Aqua Simulacra' },
  { name: 'Beacon of the Reed Sea' },
  { name: 'Calamity Queller' },
  { name: 'Cashflow Supervision' },
  { name: "Crane's Echoing Call" },
  { name: "Crimson Moon's Semblance" },
  { name: 'Elegy for the End' },
  { name: 'Engulfing Lightning' },
  { name: 'Everlasting Moonglow' },
  { name: 'Freedom-Sworn' },
  { name: 'Haran Geppaku Futsu' },
  { name: "Hunter's Path" },
  { name: "Jadefall's Splendor" },
  { name: "Kagura's Verity" },
  { name: 'Key of Khaj-Nisut' },
  { name: 'Light of Foliar Incision' },
  { name: 'Memory of Dust' },
  { name: 'Mistsplitter Reforged' },
  { name: 'Polar Star' },
  { name: 'Primordial Jade Cutter' },
  { name: 'Redhorn Stonethresher' },
  { name: 'Silvershower Heartstrings' },
  { name: 'Song of Broken Pines' },
  { name: 'Splendor of Tranquil Waters' },
  { name: 'Staff of Homa' },
  { name: 'Staff of the Scarlet Sands' },
  { name: 'Summit Shaper' },
  { name: 'The First Great Magic' },
  { name: 'The Unforged' },
  { name: 'Thundering Pulse' },
  { name: 'Tome of the Eternal Flow' },
  { name: "Tulaytullah's Remembrance" },
  { name: 'Uraku Misugiri' },
  { name: 'Verdict' },
  { name: 'Vortex Vanquisher' },
];
const standardWeaponOptions: Weapon[] = [
  { name: "Amos' Bow" },
  { name: 'Aquila Favonia' },
  { name: 'Lost Prayer to the Sacred Winds' },
  { name: 'Primordial Jade Winged-Spear' },
  { name: 'Skyward Atlas' },
  { name: 'Skyward Blade' },
  { name: 'Skyward Harp' },
  { name: 'Skyward Pride' },
  { name: 'Skyward Spine' },
  { name: "Wolf's Gravestone" },
];
</script>

<template>
  <UDivider class="mb-4 mt-8" label="Character and Weapon" />
  <div class="grid grid-cols-4 gap-4">
    <SharedSelector
      label="Limited Characters"
      :options="limitedCharacterOptions"
      v-model="limitedCharacters"
      toggle-attribute="isWellBuild"
    />
    <SharedSelector
      label="Standard Characters"
      :options="standardCharacterOptions"
      v-model="standardCharacters"
      toggle-attribute="isWellBuild"
    />
    <SharedSelector
      label="Limited Weapons"
      :options="limitedWeaponOptions"
      v-model="limitedWeapons"
      toggle-attribute="isSignature"
    />
    <SharedSelector
      label="Standard Weapons"
      :options="standardWeaponOptions"
      v-model="standardWeapons"
      toggle-attribute="isSignature"
    />
  </div>
</template>

<style scoped></style>
