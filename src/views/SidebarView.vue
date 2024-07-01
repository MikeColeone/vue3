<script setup lang="ts"></script>
<template>
  <div>
    <h1>Vue Example</h1>
    <h2><router-link to="/">HOME</router-link></h2>

    <br />

    <h1>组合式api</h1>
    <ul>
      <li>
        <router-link to="/example02_01">ref/watch/watchEffect/computed</router-link>
        <router-link></router-link>
        <router-link></router-link>
        <router-link></router-link>
        <router-link></router-link>
      </li>
    </ul>
    <h1>Directive</h1>
    <ul>
      <li>
        <router-link to="/example03_01">template & if & v-bind</router-link>
      </li>
      <li>
        <router-link to="/example03_02">v-bind</router-link>
      </li>
      <li>
        <router-link to="/example03_03">v-for</router-link>
      </li>
    </ul>

    <h1>Experitment02</h1>
    <li>
      <router-link to="/experiment02">实验二 Vue双向绑定实验</router-link>
    </li>
  </div>
</template>
