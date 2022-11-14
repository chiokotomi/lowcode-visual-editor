<script setup>
import { ref, computed } from 'vue';
import draggable from 'vuedraggable';
import useStore from 'app/stores';
import WidgetRender from 'app/components/common/WidgetRender';


const { pageConfig, widgetConfig, visualEditor } = useStore();

const blocks = computed({
    get: () => {
        return pageConfig.widgetIds.map((widgetId) => {
            return {
                ...widgetConfig[pageConfig.widgetPropsMap[widgetId].name],
                ...pageConfig.widgetPropsMap[widgetId]
            }
        });
    },
    set: (val) => {
        let newWidgetIds = [];
        val.map((item) => {
            const id = item.id ? item.id : new Date().getTime();
            newWidgetIds.push(id);
            if (!item.id) {
                visualEditor.$patch({
                    selectId: id,
                    activeTabName: 'widgetAttr'
                });
            }
            pageConfig.widgetPropsMap[id] = {
                ...item,
                id,
            }
        })
        pageConfig.widgetIds = newWidgetIds;
    }
});

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
                <div class="cursor-move" :class="{ 'is-selected': element.id === visualEditor.selectId }">
                    <WidgetRender :element={element} class="pointer-events-none"/>
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
