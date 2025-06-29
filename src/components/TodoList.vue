<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import { useTodoStore } from '@/stores/todos'


const todoStore = useTodoStore()

</script>

<template>
  <ul :class="todoStore.todoCategory + '-todo'">
    <TodoItem v-for="(todo, index) in todoStore.todos" :key="todo.id" :todo="todo" :index="index" />
  </ul>
</template>
