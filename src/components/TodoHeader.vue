<script setup lang="ts">
import { useTodoStore } from '@/stores/todos'
import { ref } from 'vue'
import { labelId } from '@/util'

const todoInput = ref<string>('')

const todoStore = useTodoStore()




function addTodo() {
  if (todoInput.value.trim() === '') {
    return
  }
  todoStore.addTodo(todoInput.value)
  todoInput.value = ''
}
</script>

<template>
  <div class="w-3/4 mx-auto">
    <h1 class="text-2xl text-center">Todo List</h1>
    <div class="flex">
      <label :for="labelId()" class="flex items-center mb-4">
        <input type="checkbox" class="mr-2" @change="todoStore.toggleAll" :checked="todoStore.isAllCompleted" />
      </label>
      <label :for="labelId()" class="flex items-center mb-4">
        <input type="text" class="border indent-2" autofocus v-model="todoInput" @keydown.enter="addTodo" />
      </label>
    </div>
  </div>
</template>

<style scoped></style>
