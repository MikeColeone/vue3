<script setup lang="ts">
import { defineAsyncComponent, ref, computed } from 'vue'

// 定义数组，实现异步动态加载
const components: { name: string; component: ReturnType<typeof defineAsyncComponent> }[] = [
  {
    name: '添加用户',
    component: defineAsyncComponent({
      loader: () => import('./addUser.vue')
    })
  },
  {
    name: '删除用户',
    component: defineAsyncComponent({
      loader: () => import('./deleteUser.vue')
    })
  },
  {
    name: '更新用户',
    component: defineAsyncComponent({
      loader: () => import('./updateUser.vue')
    })
  }
]

// 基于索引切换组件并且初始化
const indexComR = ref(0)

const getCurrentComponent = computed(() => {
  return components[indexComR.value]?.component
})

// 激活组件时实现切换颜色
const activeComStyle = computed(() => {
  return (index: number) => {
    return index === indexComR.value ? { class: 'active' } : { class: 'noActive' }
  }
})

// 检查很久没发现问题 原来是这个函数没有return, 太抽象了
</script>

<template>
  <div>
    <h1>Homework - 组件动态切换</h1>
    <p>无需路由的动态加载组件。切换组件时获取组件索引，更新加载组件以及功能描述文字样式。</p>
    <hr />
    <div
      class="navhead"
      v-for="(c, index) in components"
      :key="index"
      @click="indexComR = index"
      :class="activeComStyle(index).class">
      {{ c.name }}
    </div>
    <p>
      <component :is="getCurrentComponent" />
    </p>
  </div>
</template>

<style>
.active {
  color: red;
  text-decoration: underline;
  cursor: pointer;
}

.noActive {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.navhead {
  display: flex;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
</style>
