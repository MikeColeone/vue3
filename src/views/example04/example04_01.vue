<!-- Route With Params -->
<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

// 在值第一次绑定时就执行监听
watch(
  route.params,
  (newValue, oldValue) => {
    console.log(oldValue, newValue)
  },
  { immediate: true }
)
</script>
<template>
  <div>
    <h1>useRoute()</h1>
    <p>
      在vue-router声明RESTful风格路径参数。组件内通过useRoute()函数获取当前路由对象，params获取路由参数对象；
      对象由路由路径中声明的参数组成。
      <br />
      2次连续切换相同组件，默认直接复用组件不再执行setup()函数；可通过watch()+immediate函数监听route改变。
    </p>
    <p>route.params对象改变：{{ route.params }}</p>
    <p>studentId:{{ route.params.sid }}</p>
    <p>homeworkId:{{ route.params.hid }}</p>
  </div>
</template>
