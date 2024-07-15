<script setup lang="ts">
const store = useAccountStore();

const character = useCharacterData();
const weapon = useWeaponData();

watch(() => store.data.limitedChars, watchChar);
watch(() => store.data.standardChars, watchChar);
watch(() => store.data.limitedWeaps, watchWeap);
watch(() => store.data.standardWeaps, watchWeap);

function watchChar(now: Character[], prev: Character[]) {
  let char = (now.length > prev.length ? now.filter(x => !prev.includes(x)) : prev.filter(x => !now.includes(x)))[0];

  const weap =
    store.data.limitedWeaps.find(w => w.owner == char.name) || store.data.standardWeaps.find(w => w.owner == char.name);

  if (!weap) return;
  char.hasSignature = !char.hasSignature;
  weap.isSignature = !weap.isSignature;
}
function watchWeap(now: Weapon[], prev: Weapon[]) {
  let weap = (now.length > prev.length ? now.filter(x => !prev.includes(x)) : prev.filter(x => !now.includes(x)))[0];

  const char =
    store.data.limitedChars.find(c => c.name == weap.owner) || store.data.standardChars.find(c => c.name == weap.owner);

  if (!char) return;
  char.hasSignature = !char.hasSignature;
  weap.isSignature = !weap.isSignature;
  console.log(weap);
}
</script>

<template>
  <UDivider class="mb-4 mt-8" label="Character and Weapon" />
  <div class="grid grid-cols-4 gap-4">
    <SharedSelector
      label="Limited Characters"
      :options="character.limited"
      v-model="store.data.limitedChars"
      toggle-attribute="isWellBuild"
    />
    <SharedSelector
      label="Standard Characters"
      :options="character.standard"
      v-model="store.data.standardChars"
      toggle-attribute="isWellBuild"
    />
    <SharedSelector
      label="Limited Weapons"
      :options="weapon.limited"
      v-model="store.data.limitedWeaps"
      toggle-attribute="isSignature"
    />
    <SharedSelector
      label="Standard Weapons"
      :options="weapon.standard"
      v-model="store.data.standardWeaps"
      toggle-attribute="isSignature"
    />
  </div>
</template>

<style scoped></style>
