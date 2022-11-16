<script setup>
import { Button } from 'vant';
defineProps({
    text: {
        type: String,
    },
    type: {
        type: String,
    },
    size: {
        type: String,
    }
});

</script>

<template>
<div>
    <Button :text="text" :type="type" :size="size"></Button>
</div>
</template>

<style scoped>

</style>
