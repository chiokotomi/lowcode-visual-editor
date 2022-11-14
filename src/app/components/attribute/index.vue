<script setup>
import { ref } from 'vue';
import useStore from 'app/stores';
import PageAttrEditor from './pageAttrEditor/index.vue';
import WidgetAttrEditor from './widgetAttrEditor/index.vue';

const { visualEditor } = useStore();

</script>

<template>
<div class="visual-editor-attribute">
    <el-tabs type="border-card" v-model="visualEditor.activeTabName" class="" stretch>
        <el-tab-pane name="widgetAttr" label="组件属性" :disabled="!visualEditor.selectId">
            <WidgetAttrEditor v-if="visualEditor.selectId"/>
        </el-tab-pane>
        <el-tab-pane name="pageAttr" label="页面属性">
            <PageAttrEditor />
        </el-tab-pane>
    </el-tabs>
</div>
</template>

<style scoped>

</style>
