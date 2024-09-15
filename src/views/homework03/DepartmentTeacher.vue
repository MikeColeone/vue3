<script setup lang="ts">
import { ref, type Ref, watch } from 'vue'
import { listDepartmentsService, listTeachersService } from './services'
import type { Department, Teacher } from '@/type'

// 定义响应式变量
const teacherR = ref<Teacher | null>(null)
const departments = ref<Department[]>([])
const teachers = ref<Teacher[]>([]) // 声明为响应式变量
const idLink = ref<string>('') // idLink 用于绑定选择的部门

// 异步获取部门数据
departments.value = (await listDepartmentsService()) as Department[]

// 监听部门选择变化
watch(idLink, async (newId) => {
  if (newId) {
    teachers.value = (await listTeachersService(newId)) as Teacher[]
  } else {
    teachers.value = [] // 如果没有选择部门，清空教师列表
  }
})

defineExpose<{ teacher: Ref<Teacher | null> }>({ teacher: teacherR })
</script>

<template>
  <div class="despose">
    <select name="department" id="department" v-model="idLink">
      <option v-for="(department, index) in departments" :key="index" :value="department.id">
        {{ department.name }}
      </option>
    </select>
  </div>

  <div class="despose">
    <select name="teacher" id="teacher" v-model="teacherR">
      <option v-for="(teacher, index) in teachers" :key="index" :value="teacher">
        {{ teacher.name }}
      </option>
    </select>
  </div>
</template>
