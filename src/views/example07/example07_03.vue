<script setup lang="ts">
import { exampleStore } from './exampleStore'
import { ref } from 'vue'
const store = exampleStore()
const dCount = store.doubleCountS
//当依赖的数值变化的时候自动重新计算
const changePre = () => (store.userS.value.level = store.userS.value.level == 1 ? 2 : 1)

const premissionG = store.premissionG
console.log(premissionG)
</script>
<template>
  <div>
    <h1>Getters</h1>
    <p>
      count+1，但是声明的doubleCount属性计算count * 2。
      <br />
      <button @click="store.countS.value++">count++</button>
      <br />
      引入为本地计算属性 / 直接绑定store计算属性。
      <br />
      {{ dCount }} / {{ store.doubleCountS }}
    </p>
    <p>
      getter绑定。声明组件所需权限，与state中保存的用户权限比较，确定是否显式。
      <br />
      <button @click="changePre">changePre</button>
      <br />
      <span v-if="premissionG(1)">权限为1的普通用户可见</span>
      <span v-if="store.premissionG.value(2)">权限为2的VIP用户可见</span>
    </p>
  </div>
</template>
