<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

onMounted(() => (document.body.style.overflow = 'hidden'))
onUnmounted(() => (document.body.style.overflow = ''))
</script>
<template>
  <div class="loading">loading</div>
</template>
<style scoped>
.loading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
}
</style>
