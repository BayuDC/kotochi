<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <AccountForm :id="(route.params.id as string)" />
  </div>
</template>

<style scoped></style>
