<script setup>
import { ref, computed } from 'vue';
import draggable from 'vuedraggable';
import useStore from 'app/stores';


const { pageConfig, widgetConfig, visualEditor } = useStore();

const blocks = computed({
    get: () => {
        return pageConfig.widgetIds.map((widgetId) => {
            return pageConfig.widgetPropsMap[widgetId];
        });
    },
    set: (val) => {
        let newWidgetIds = [];
        val.map((item) => {
            // 从左侧添加
            if (!item.id) {
                const id = new Date().getTime();
                newWidgetIds.push(id);
                pageConfig.widgetPropsMap[id] = {
                    id,
                    name: widgetConfig[item].name,
                    props: {...widgetConfig[item].props},
                };
                visualEditor.$patch({
                    selectId: id,
                    activeTabName: 'widgetAttr'
                });
            } else {
                // 自己重排
                newWidgetIds.push(item.id);
            }
        })
        pageConfig.widgetIds = newWidgetIds;
    }
});

const onBlockClick = id => {
    visualEditor.$patch({
        selectId: id,
        activeTabName: 'widgetAttr'
    });
}
</script>

<template>
<div class="visual-editor-canvas">
    <div class="visual-editor-canvas-content"
        :style="{height: pageConfig.height + 'px', backgroundColor: pageConfig.bgColor}">
        <draggable
            scroll
            animation="200"
            ghost-class="canvas-block-ghost"
            v-model="blocks"
            group="canvas"
            item-key="id"
            class="visual-editor-canvas-drag-area"
        >
            <template #item="{element}">
                <div class="cursor-move" @click="onBlockClick(element.id)"
                    :class="{ 'is-selected': element.id === visualEditor.selectId }">
                    <component :is="`${element.name}`"
                        v-bind="element.props" class="pointer-events-none overflow-hidden"></component>
                </div>
            </template>
        </draggable>
    </div>
</div>
</template>

<style scoped>
.canvas-block-ghost {
    background: #c8ebfb;
    opacity: 0.5;
}

.visual-editor-canvas {
    height: 100%;
}

.visual-editor-canvas-content {
    background-color: white;
    width: 360px;
    margin: 0 auto;
}
.visual-editor-canvas-drag-area {
    height: 100%;
}
.visual-editor-canvas-drag-area > .is-selected {
    border: 1px solid #409eff;
}
</style>
