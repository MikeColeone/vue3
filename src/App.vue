<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SidebarView from '@/views/SidebarView.vue'
</script>
<template>
  <SidebarView id="sidebar" />
  <RouterView id="router" />
</template>
<style>
#app {
  display: flex;
}
#sidebar {
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  width: 40%;
}
#router {
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  width: 60%;
}
</style>
