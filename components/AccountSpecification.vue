<script setup lang="ts">
const form = useAccountFormStore();
const character = useCharacterData();
const weapon = useWeaponData();

const charLimited = ref<Character[]>([]);
const weapLimited = ref<Weapon[]>([]);
const charStandard = ref<Character[]>([]);
const weapStandard = ref<Weapon[]>([]);

watch(charLimited, watchChar);
watch(charStandard, watchChar);
watch(weapLimited, watchWeap);
watch(weapStandard, watchWeap);

function watchChar(now: Character[], prev: Character[]) {
  let char = (now.length > prev.length ? now.filter(x => !prev.includes(x)) : prev.filter(x => !now.includes(x)))[0];

  const weap = weapLimited.value.find(w => w.owner == char.name) || weapStandard.value.find(w => w.owner == char.name);

  if (!weap) return;
  char.hasSignature = !char.hasSignature;
  weap.isSignature = !weap.isSignature;
}
function watchWeap(now: Weapon[], prev: Weapon[]) {
  let weap = (now.length > prev.length ? now.filter(x => !prev.includes(x)) : prev.filter(x => !now.includes(x)))[0];

  const char = charLimited.value.find(c => c.name == weap.owner) || charStandard.value.find(c => c.name == weap.owner);

  if (!char) return;
  char.hasSignature = !char.hasSignature;
  weap.isSignature = !weap.isSignature;
}
</script>

<template>
  <UDivider class="mb-4 mt-8" label="Character and Weapon" />
  <div class="grid grid-cols-4 gap-4">
    <SharedSelector
      label="Limited Characters"
      :options="character.limited"
      v-model="charLimited"
      toggle-attribute="isWellBuild"
    />
    <SharedSelector
      label="Standard Characters"
      :options="character.standard"
      v-model="charStandard"
      toggle-attribute="isWellBuild"
    />
    <SharedSelector
      label="Limited Weapons"
      :options="weapon.limited"
      v-model="weapLimited"
      toggle-attribute="isSignature"
    />
    <SharedSelector
      label="Standard Weapons"
      :options="weapon.standard"
      v-model="weapStandard"
      toggle-attribute="isSignature"
    />
  </div>
</template>

<style scoped></style>
