<template>
    <el-row class="visual-editor-header items-center">
        <el-col :span="6" class="items-center">
            <h3 class="font-semibold">低代码可视化编辑器</h3>
        </el-col>

        <el-col :span="12" class="flex items-center justify-end" >
            <template v-for="(toolItem, toolIndex) in tools" :key="toolIndex">
                <el-link @click="toolItem.onClick" class="ml-4">
                    <el-icon class="mr-1">
                        <component :is="toolItem.icon" />
                    </el-icon>
                    <div class="title">{{ toolItem.title }}</div>
                </el-link>
            </template>
        </el-col>

        <el-col :span="6" class="flex justify-end">
            <el-button
                type="primary"
                class=""
            >保存</el-button>
        </el-col>
    </el-row>
    <el-dialog v-model="dialogVisible" title="预览" width="600px">
        <div class="mb-4">屏幕尺寸：360px * 600px</div>
        <div class="flex justify-center">
            <div class="flex justify-center rounded-3xl border-1 border-gray-500\/50"
                :style="{width: '400px', height: '680px', padding: '40px 20px'}">
                <div :style="{width: '360px', height: '600px'}"
                    class="overflow-x-hidden overflow-y-auto border-1 border-gray-500\/50">
                    <div :style="{height: pageConfig.height + 'px', backgroundColor: pageConfig.bgColor, width: '360px'}">
                    <template v-for="(widgetId, i) in pageConfig.widgetIds" :key="i">
                        <component :is="`${pageConfig.widgetPropsMap[widgetId].name}`"
                            v-bind="pageConfig.widgetPropsMap[widgetId].props"></component>
                    </template>
                </div>
            </div>
            </div>
        </div>
    </el-dialog>
</template>
  
<script setup>
import { ref } from 'vue';
import {
    // RefreshLeft,
    // RefreshRight,
    Box,
    Download,
    View,
    Delete,
} from '@element-plus/icons-vue';
import useStore from 'app/stores';
// import { setLocalStorage } from 'app/common/utils/localStorage';

const { pageConfig, visualEditor, widgetConfig } = useStore();
const dialogVisible = ref(false);

const tools = [
    // {
    //     title: '撤销',
    //     icon: RefreshLeft,
    //     onClick: () => {}
    // },
    // {
    //     title: '重做',
    //     icon: RefreshRight,
    //     onClick: () => {}
    // },
    {
        title: '导入JSON',
        icon: Box,
        onClick: () => {
            const jsonObj = {"widgetIds":[1668591549041],"widgetPropsMap":{"1668591549041":{"id":1668591549041,"name":"veSingleImg","props":{"width":360,"height":280,"src":"https://img.yzcdn.cn/vant/cat.jpeg"}}},"height":700,"bgColor":"#A43434"};

            pageConfig.$patch({
                widgetIds: jsonObj.widgetIds,
                widgetPropsMap: jsonObj.widgetPropsMap,
                height: jsonObj.height,
                bgColor: jsonObj.bgColor
            })
        }
    },
    {
        title: '打印JSON',
        icon: Download,
        onClick: () => {
            const jsonObj = {
                widgetIds: pageConfig.widgetIds,
                widgetPropsMap: pageConfig.widgetPropsMap,
                height: pageConfig.height,
                bgColor: pageConfig.bgColor
            }
            console.log(JSON.stringify(jsonObj));
        }
    },
    {
        title: '清空',
        icon: Delete,
        onClick: () => {
            pageConfig.$patch({
                widgetIds: [],
                widgetPropsMap: {},
                height: 600,
                bgColor: '#ffffff',
            });
            visualEditor.$patch({
                selectId: null,
                activeTabName: 'pageAttr'
            });
        }
    },
    {
        title: '预览',
        icon: View,
        onClick: () => {
            dialogVisible.value = true;
            // setLocalStorage('jsonData', JSON.stringify(''));
            // window.open(location.href.replace('/#/', '/preview/#/'));
        }
    }
];

</script>
  
<style scoped>
.visual-editor-header {
    height: 100%;
}
.visual-editor-header h3 {
    color: #1989fa;
}
</style>
  