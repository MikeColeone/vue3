<script setup lang="ts">
import { ref } from 'vue'

const tasks = ref([
  { id: 0, text: '参观卡夫卡博物馆', done: true },
  { id: 1, text: '看木偶戏', done: false },
  { id: 2, text: '打卡列侬墙', done: false }
])

tasks.value.forEach((t) => {
  t.isEditing = false
})

const newTask = ref('')

const addTask = () => {
  if (newTask.value) {
    tasks.value.push({
      id: tasks.value.length,
      text: newTask.value,
      done: false,
      isEditing: false
    })
    console.log(newTask.value)
    newTask.value = ''
  }
}
const editTask = (task) => {
  task.isEditing = true
}
const finishEdit = (task) => {
  task.isEditing = false
}
const removeTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id)
}
</script>

<template>
  <div id="app">
    <h1>Day off in Kyoto</h1>
    <input v-model="newTask" placeholder="Add" />
    <button @click="addTask">add</button>

    <ul>
      <li v-for="(c, index) of tasks" :key="index" style="list-style: none">
        <template v-if="c.isEditing">
          <input v-model="c.text" />
          <button @click="finishEdit(c)">finish</button>
          <button @click="removeTask(c.id)">delete</button>
        </template>
        <template v-else>
          <input type="checkbox" v-model="c.done" />
          <span>{{ c.id }} | {{ c.text }}</span>
          <button @click="editTask(c)">edit</button>
          <button @click="removeTask(c.id)">delete</button>
        </template>
      </li>
    </ul>
  </div>
</template>

<style></style>
