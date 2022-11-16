<script setup>
import { Card } from 'vant';
defineProps({
    num: {
        type: String,
    },
    tag: {
        type: String,
    },
    price: {
        type: String,
    },
    desc: {
        type: String,
    },
    title: {
        type: String,
    },
    thumb: {
        type: String,
    },
    originPrice: {
        type: String,
    }
});

</script>

<template>
<div>
    <Card
        :num="num"
        :tag="tag"
        :price="price"
        :desc="desc"
        :title="title"
        :thumb="thumb"
        :origin-price="originPrice"
    />
</div>
</template>

<style scoped>

</style>
