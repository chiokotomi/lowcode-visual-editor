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
</template>
  
<script setup>
import {
    RefreshLeft,
    RefreshRight,
    View,
    Delete,
} from '@element-plus/icons-vue';
import { setLocalStorage } from 'app/common/utils/localStorage';
const tools = [
    {
        title: '撤销',
        icon: RefreshLeft,
        onClick: () => {}
    },
    {
        title: '重做',
        icon: RefreshRight,
        onClick: () => {}
    },
    {
        title: '清空',
        icon: Delete,
        onClick: () => {}
    },
    {
        title: '预览',
        icon: View,
        onClick: () => {
            setLocalStorage('jsonData', JSON.stringify(''));
            window.open(location.href.replace('/#/', '/preview/#/'));
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
  