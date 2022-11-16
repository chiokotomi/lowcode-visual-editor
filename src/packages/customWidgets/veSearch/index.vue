<script setup>
import { Search } from 'vant';
defineProps({
    background: {
        type: String,
    },
    shape: {
        type: String,
    }
});
</script>

<template>
    <div>
        <Search :background="background" :shape="shape"/>
    </div>
</template>

<style scoped>

</style>