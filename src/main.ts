//引入createapp用于创建应用
import { createApp } from 'vue'
//引入根组件
import App from './App.vue'
import router from './router'

// 调用 使用router组件渲染App
createApp(App).use(router).mount('#app')
