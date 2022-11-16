<script setup>
import { Image } from 'vant';
// https://img.yzcdn.cn/vant/cat.jpeg
defineProps({
    width: {
        type: Number,
    },
    height: {
        type: Number,
    },
    src: {
        type: String,
    }
});

</script>

<template>
<div>
    <Image :width="width" :height="height" :src="src"></Image>
</div>
</template>

<style scoped>

</style>
