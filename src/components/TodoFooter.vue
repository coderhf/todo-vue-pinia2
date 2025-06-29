<script setup lang="ts">
import { labelId } from '@/util'
import { useTodoStore } from '@/stores/todos'

const todoStore = useTodoStore()

</script>

<template>
  <footer>
    <div>
      {{ todoStore.leftCount }} item{{ todoStore.leftCount > 1 ? 's' : '' }} left
    </div>
    <div class="flex gap-2">
      <div>
        <input type="radio" name="" id="" v-model="todoStore.todoCategory" value="all">
        <label :for="labelId()">ALL</label>
      </div>
      <div>
        <input type="radio" name="" id="" v-model="todoStore.todoCategory" value="completed">
        <label :for="labelId()">COMPLETED</label>
      </div>
      <div>
        <input type="radio" name="" id="" v-model="todoStore.todoCategory" value="active">
        <label :for="labelId()">ACTIVE</label>
      </div>
    </div>
    <button @click="todoStore.clearCompleted" v-if="todoStore.todos.some(todo => todo.completed)">clear
      completed</button>
  </footer>
</template>

<style scoped></style>
