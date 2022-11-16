<script setup>
import { ref, computed } from 'vue';
import draggable from 'vuedraggable';
import useStore from 'app/stores';
import {
    Document,
    Files,
    SetUp,
} from '@element-plus/icons-vue';

const { widgetConfig } = useStore();

const tabs = [
    {
        name: 'baseWidgets',
        label: '基础组件',
        icon: Document,
        widgets: widgetConfig.baseWidgetsArr,
        // TODO: 按照顺序需要显示的组件map array
    },
    {
        name: 'moduleWidgets',
        label: '模块组件',
        icon: Files,
        widgets: widgetConfig.moduleWidgetsArr,
    },
    {
        name: 'customWidgets',
        label: '自定义组件',
        icon: SetUp,
        widgets: widgetConfig.customWidgetsArr,
    }
];

const activeTabName = ref('baseWidgets');


</script>

<template>
    <el-tabs type="border-card" v-model="activeTabName" tab-position="left" class="visual-editor-material">
        <template v-for="tabItem in tabs" :key="tabItem.name">
            <el-tab-pane :name="tabItem.name" lazy>
                <template #label>
                    <div class="flex items-center justify-around">
                        <el-icon :size="26"><component :is="tabItem.icon" /></el-icon>
                        {{ tabItem.label }}
                    </div>
                </template>
                <draggable
                    ghost-class="canvas-block-ghost"
                    v-model="tabItem.widgets"
                    :group="{ name: 'canvas', pull: 'clone', put: false }"
                    item-key="name"
                >
                    <template #item="{element}">
                        <div class="border border-blue-400 mb-4 relative cursor-move">
                            <div class="w-20 bg-blue-400 text-center absolute z-1 text-sm"
                                :style="{color: 'white'}">
                                {{widgetConfig[element].label}}</div>
                            <div class="text-center my-2 pointer-events-none">
                                <component :is="`${element}`"
                                    v-bind="widgetConfig[element].props"></component>
                            </div>
                        </div>
                    </template>
                </draggable>
            </el-tab-pane>
        </template>
    </el-tabs>
</template>

<style scoped>
.visual-editor-material {
    height: 100%;
}

</style>
