<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 加载中占位图
const imgurl = ref(new URL('/src/assets/loading.png', import.meta.url).href)

let observer: IntersectionObserver

onMounted(() => {
  // 1. 创建 IntersectionObserver 实例
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const imgTarget = entry.target as HTMLImageElement
        imgTarget.src = imgTarget.dataset.src ?? ''
        observer.unobserve(imgTarget)
      }
    }
  })

  // 2. 注册所有 lazy-image 类名的图片
  const imgs = document.getElementsByClassName('lazy-image')
  for (const img of Array.from(imgs)) {
    if (img instanceof HTMLImageElement) {
      observer.observe(img)
    }
  }
})

onUnmounted(() => {
  observer && observer.disconnect()
})
</script>

<template>
  <div>
    <!-- 示例图片：需要给实际 src 用 data-src -->
    <img class="lazy-image" :src="imgurl" data-src="../assets/test01.png" alt="Lazy" />
  </div>
</template>
