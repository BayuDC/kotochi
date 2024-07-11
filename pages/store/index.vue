<script setup lang="ts">
const people = [
    {
        id: 131,
        name: '[8 Limit] Hu Tao Arlecchino Wanderer Kazuha Zhongli Yelan Ayaka Cyno WELL BUILD PARAH | Tighnari Diluc Mona Jean Keqing Dehya [14B5][AR58]',
        status: 'Sale',
        price: '440000',
    },
    {
        id: 133,
        name: '[7 Limit] Wanderer Xiao Childe Eula Raiden Shogun WELL BUILD | Zhongli Itto | Jean Diluc Keqing Qiqi Mona [12B5][AR56]',
        status: 'Sale',
        price: '340000',
    },
];
</script>

<template>
    <div>
        <div class="flex justify-between py-3.5 border-b border-gray-200 dark:border-gray-700">
            <USelectMenu placeholder="Status" :options="['All', 'Sale', 'Sold']" />
            <UButton label="New Account" to="/store/new" />
        </div>

        <UTable :rows="people" />
    </div>
</template>

<style scoped></style>
