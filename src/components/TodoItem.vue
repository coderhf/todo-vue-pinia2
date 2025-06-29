<script setup lang="ts">
import type { Todo } from '@/type'
import {nextTick, ref, useId, watch } from 'vue'
import { useTodoStore } from '@/stores/todos'


const props = defineProps<{
  todo: Todo,
  index: number
}>()

const todoStore = useTodoStore()
const inputRef = ref<HTMLInputElement | null>(null)

const inputText = ref<string>('')

const labelId = useId()

// 监听编辑索引变化，聚焦输入框
watch(() => todoStore.editingIndex, async (newIndex) => {
  console.log(inputRef.value, newIndex, props.index)
  await nextTick() // 等待 DOM 更新
  // 如果当前输入框存在且是被编辑的索引，则聚焦
  if (inputRef.value && newIndex === props.index) {
    inputRef.value.focus()
  }
})

function quashTodo() { // 撤销修改
  // 如果输入框内容为空，则删除该 todo
  if (inputText.value.trim() !== '') {
    todoStore.editingIndex = -1 // 重置编辑索引
    inputText.value = props.todo.text // 恢复原文本
  }
}

function handleDblclick() {
  todoStore.editingIndex = props.index // 设置编辑索引为当前索引
  inputText.value = props.todo.text // 设置输入框文本为当前 todo 文本
}

</script>

<template>
  <li :class="todo.completed ? 'line-through text-gray-500 completed' : 'active'" class="flex items-center justify-between p-2 border-b 
    [.completed-todo_&.active]:hidden [.active-todo_&.completed]:hidden">
    <label :for="labelId" class="flex items-center">
      <input type="checkbox" class="mr-2" v-model="todo.completed" />
      <input type="text" ref="inputRef" name="" id="" v-if="index === todoStore.editingIndex" v-model="inputText"
        @blur="quashTodo" @keydown.esc="quashTodo" @keydown.enter="todoStore.updateTodo(todo.id, inputText)" />
      <span v-else class="text-gray-700" @dblclick="handleDblclick">{{ todo.text }}</span>
      <button @click="todoStore.deleteTodo(todo.id)"
        class="ml-2 text-red-500 hover:text-red-700 bg-gray-500 p-2">X</button>
    </label>
  </li>
</template>

<style scoped></style>
