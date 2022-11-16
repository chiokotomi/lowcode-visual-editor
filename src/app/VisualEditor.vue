<script setup>
import 'virtual:windi.css';
import Header from 'app/components/header/index.vue';
import Material from 'app/components/material/index.vue';
import Canvas from 'app/components/canvas/index.vue';
import Attribute from 'app/components/attribute/index.vue';

defineProps({
    className: {
        type: String,
    },
});

</script>

<template>
  <div :class="['visual-editor', className]" ref="visualEditorInstance">
    <el-container class="visual-editor-container">
      <el-header height="60px" class="items-center shadow-md">
        <Header />
      </el-header>
      <el-container class="visual-editor-containe-main">
        <el-aside class="" width="345px">
          <Material />
        </el-aside>
        <el-main height="100%" class="bg-gray-500/20">
          <Canvas />
        </el-main>
        <el-aside width="380px" class="">
          <Attribute />
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<style>

body {
  overflow: hidden;
  margin: 0;
}

.visual-editor {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.visual-editor-container {
  height: 100%;
}
.visual-editor-containe-main {
  height: calc(100vh - 60px);
}
.visual-editor-containe-main > .el-main {
  padding-bottom: 0;
}

// fix van-image styl
#app .van-image {
  display: block;
}

</style>
