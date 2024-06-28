<script setup lang="ts">
import type { User } from '@/type'
import { computed, ref, watch, watchEffect } from 'vue'

const message = 'hello'
</script>
<template>
  <div>
    <h1>非响应式</h1>
    <p>普通数据也可渲染在视图。以下message数据为非响应式的静态数据，即数据改变时视图无响应</p>
    message:{{ message }}

    <br />
    <p>当执行以下函数改变userRef值，此数据不会改变</p>
  </div>
</template>
