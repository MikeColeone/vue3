<script setup lang="ts">
import { listCourses, type Course } from '@/type'

import { ref, watchEffect, watch } from 'vue'

const active = ref('green')

const pointMax = 12 //创建最大学分
const pointGeted = ref(0) //以获得学分 并确定是响应式的

active.value = pointGeted.value >= pointMax ? 'red' : 'green'

const selectedCourses = ref<Course[]>([]) //创建空数组

//初始化选课状态
let checkedCourse = ref(false)
//对课程进行排序 并添加选中状态事件
const endCourses = listCourses()
  .sort((a, b) => a.term - b.term)
  .map((c) => ({
    ...c,
    checked: checkedCourse.value
  }))

//事件监听
const changePoint = function () {
  checkedCourse.value = !checkedCourse.value
}

//清空选课
const clearCourseSelected = () => {
  selectedCourses.value.length = 0
}
//监听选课事件变化
watch(selectedCourses, () => {
  //重置选秀课程
  pointGeted.value = 0
  selectedCourses.value.forEach((c) => {
    pointGeted.value += c.point
  })

  selectedCourses.value.sort((a, b) => a.term - b.term)
})
</script>
<template>
  <div>
    <h1>专业选修课计算</h1>
    <span :class="{ backgroundcolor: active }">{{ pointGeted }}</span>
    <span>/{{ pointMax }}</span>
    <br />
  </div>
  <!-- 创建选课表 -->
  <div class="classBox">
    <template v-for="(c, index) of endCourses" :key="index">
      <!-- 确保有唯一的id以实现定位到课程 -->
      <input type="checkbox" id="'course_'+index" v-model="selectedCourses" :value="c" />
      <br />
      <label for="'course_'+index">
        name:{{ c.name }} - point:{{ c.point }} - term:{{ c.term }}
      </label>
      <br />
    </template>
  </div>

  <div class="classBox">
    <template v-for="(c, index) of selectedCourses" :key="index">
      name:{{ c.name }} - point:{{ c.point }} - term:{{ c.term }}
      <br />
    </template>
  </div>

  <div>
    <button @click="clearCourseSelected">重置选课</button>
  </div>
</template>

<style scopde>
.classBox {
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
}
</style>
