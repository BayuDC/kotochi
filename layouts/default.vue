<script setup lang="ts">
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-building-storefront',
    to: '/',
  },
  {
    label: 'Setting',
    icon: 'i-heroicons-cog-6-tooth',
    to: '/setting',
  },
];

const notify = useNotify();
</script>

<template>
  <div>
    <div class="border-b border-gray-200 dark:border-gray-800">
      <UContainer class="flex items-center justify-between">
        <h1 class="text-xl font-bold">Shirayuki Store</h1>
        <div>
          <UHorizontalNavigation :links="links" />
        </div>
      </UContainer>
    </div>
    <div class="my-8">
      <UContainer>
        <slot />
      </UContainer>
      <Transition
        enter-to-class="translate-y-0"
        enter-from-class="translate-y-full"
        leave-from-class="translate-y-0"
        leave-to-class="translate-y-full"
      >
        <div
          :key="notify.id"
          v-show="notify.show"
          class="fixed left-[50%] -translate-x-[50%] bottom-0 p-10 flex justify-center duration-200 ease-in-out"
        >
          <div class="w-96">
            <UAlert :title="notify.message" color="primary" variant="solid" />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped></style>
