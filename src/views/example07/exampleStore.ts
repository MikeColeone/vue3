//生成响应式数据和响应式数据的函数
import { createGlobalState } from '@vueuse/core'
import { computed, ref } from 'vue'

createGlobalState(() => {
  const countS = ref(0)
  const increase = () => {
    countS.value++
  }
})
