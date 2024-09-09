<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { type Teacher } from '@/type/index'

const Loading = defineAsyncComponent(() => import('@/components/Loading.vue'))
const DepartmentTeacher = defineAsyncComponent(() => import('./DepartmentTeacher.vue'))
const teacher = ref<Teacher | null>(null)
</script>

<template>
  <div>
    <h1>Homework03-封装暴露组件数据对象</h1>
    <p>选择的教师：</p>
    <p>
      <span v-if="teacher?.id">{{ teacher.name }}/{{ teacher.age }}</span>
    </p>

    <div>
      <Suspense>
        <template #default>
          <DepartmentTeacher />
        </template>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </div>
  </div>
</template>
