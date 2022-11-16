<script setup>
import { computed } from 'vue';
import useStore from 'app/stores';

const { pageConfig, visualEditor, widgetConfig } = useStore();
const widgetCurrentProps = computed(() => {
    return pageConfig.widgetPropsMap[visualEditor.selectId].props;
});
const propsEditor = computed(() => {
    return widgetConfig[pageConfig.widgetPropsMap[visualEditor.selectId].name].propsEditor;
});

const labelWidth = "95px";
</script>

<template>
<div class="visual-editor-attribute-widget">
    <ElForm labelPosition="left">
        <ElFormItem label="组件实例ID" :labelWidth="labelWidth">
            {{visualEditor.selectId}}
        </ElFormItem>
         <template v-for="(propsEditorItem, i) in propsEditor" :key="i + 1">
            <ElFormItem :label="propsEditorItem.label" :labelWidth="labelWidth">
                <ElInput v-if="propsEditorItem.type === 'input'"
                    v-model="widgetCurrentProps[propsEditorItem.prop]"></ElInput>
                <ElInputNumber v-if="propsEditorItem.type === 'inputNumber'" :step="10"
                    v-model="widgetCurrentProps[propsEditorItem.prop]"></ElInputNumber>
                <ElSelect v-if="propsEditorItem.type === 'select'" v-model="widgetCurrentProps[propsEditorItem.prop]">
                    <template v-for="option in propsEditorItem.options" :key="option.label">
                        <ElOption :label="option.label" :value="option.value"></ElOption>
                    </template>
                </ElSelect>
                <!-- <ElUpload v-if="propsEditorItem.type === 'uploadImage'"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :show-file-list="false"
                >
                    <img v-if="widgetCurrentProps[propsEditorItem.prop]" :src="widgetCurrentProps[propsEditorItem.prop]" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                </ElUpload> -->
            </ElFormItem>
        </template>
    </ElForm>
</div>
</template>

<style scoped>

</style>
