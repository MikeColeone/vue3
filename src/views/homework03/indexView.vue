<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { type Teacher } from '@/type/index'

const Loading = defineAsyncComponent(() => import('@/components/Loading.vue'))
const DepartmentTeacher = defineAsyncComponent(() => import('./DepartmentTeacher.vue'))

// const AsyncComp = defineAsyncComponent(() => {
//   return new Promise((resolve, reject) => {
//     // ...从服务器获取组件
//     resolve(import('./DepartmentTeacher.vue'))
//   })
// })
// ... 像使用其他一般组件一样使用 `AsyncComp`
//接收返回的教师变量
const defineExposeTeacher = ref<Teacher | null>(null)
</script>

<template>
  <div>
    <h1>Homework03-封装暴露组件数据对象</h1>
    <p>选择的教师：</p>
    <p>
      <span v-if="defineExposeTeacher?.id">
        {{ defineExposeTeacher.name }}/{{ defineExposeTeacher.age }}
      </span>
    </p>

    <div padding-top="10px">
      <Suspense>
        <template #default>
          <!-- 暴露出教师数据 -->
          <DepartmentTeacher ref="defineExposeTeacher" />
        </template>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </div>
  </div>
</template>
