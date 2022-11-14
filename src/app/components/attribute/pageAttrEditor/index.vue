<script setup>
import useStore from 'app/stores';
const { pageConfig } = useStore();
const handleChange = () => {};
</script>

<template>
<div class="visual-editor-attribute-page">
    <el-descriptions :column="1">
        <el-descriptions-item label="页面背景色">
            <el-color-picker v-model="pageConfig.bgColor" />
        </el-descriptions-item>
        <el-descriptions-item label="页面高度">
            <el-input-number v-model="pageConfig.height" controls-position="right"
                @change="handleChange" :min="300" :step="10"></el-input-number>
        </el-descriptions-item>
    </el-descriptions>
</div>
</template>

<style scoped>

</style>
