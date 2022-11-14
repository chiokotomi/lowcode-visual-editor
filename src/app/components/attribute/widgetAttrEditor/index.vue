<script setup>
import { computed } from 'vue';
import useStore from 'app/stores';
const { pageConfig, visualEditor, widgetConfig } = useStore();
const widgetCurrentProps = computed(() => {
    return pageConfig.widgetPropsMap[visualEditor.selectId]
});
const propsEditor = computed(() => {
    return widgetConfig[pageConfig.widgetPropsMap[visualEditor.selectId].name].propsEditor;
});
console.log(widgetCurrentProps.value.props)
console.log(propsEditor.value)
</script>

<template>
<div class="visual-editor-attribute-widget">
    <ELForm labelPosition="left">
        <ElFormItem label="组件ID" labelWidth="76px">
            {{visualEditor.selectId}}
        </ElFormItem>
         <template v-for="(propsEditorItem, i) in propsEditor" :key="i">
            <ElFormItem :label="propsEditorItem.label">
                <ElInput v-if="propsEditorItem.type === 'input'"
                    :v-model="widgetCurrentProps[propsEditorItem.props]"></ElInput>
                <ElSelect v-if="propsEditorItem.type === 'select'" v-model="widgetCurrentProps[propsEditorItem.props]">
                    <template v-for="option in propsEditorItem.options" :key="option.label">
                        <ElOption :label="option.label" :value="option.value"></ElOption>
                    </template>
                </ElSelect>
            </ElFormItem>
        </template>
    </ELForm>
</div>
</template>

<style scoped>

</style>
