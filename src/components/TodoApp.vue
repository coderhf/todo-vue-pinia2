<script setup lang="ts">
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'
import TodoFooter from './TodoFooter.vue';
</script>

<template>
  <div class="w-3/4 mx-auto">
    <TodoHeader />
    <TodoList />
    <TodoFooter class="mt-4" />
  </div>
</template>

<style scoped></style>
