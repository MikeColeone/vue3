<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
const about = defineAsyncComponent(() => import('@/components/about.vue'))
const aboutR = ref(false)
const showAbout = () => (aboutR.value = !aboutR.value)
</script>
<template>
  <div>
    <h1>load Lazy Component</h1>
    <p>
      组件的延迟加载。许多组件在用户未操作时无需加载，因此可编译为单独的组件文件。
      这种文件代码的拆分可降低文件尺寸，提高渲染效率。
      <br />
      about组件将被编译为单独的组件文件，当符合条件，浏览器请求下载组件文件，渲染。
      通过defineAsyncComponent()函数声明延迟加载的组件，函数同时提供延迟时间，过渡组件等声明。
    </p>
    <p>
      <button type="button" @click="showAbout">show about component</button>
    </p>
    <about v-if="aboutR" />
  </div>
  <!-- 为社么注释掉br才会正常显示router盒子 -->
  <!-- 在默认div之外添加标签有可能导致routerview渲染问题 -->
  <!-- <br /> -->
</template>
