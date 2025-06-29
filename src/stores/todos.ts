import { defineStore } from "pinia";
import { computed, ref, watch } from "vue"
import type { Todo } from "../type"


export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([
    { id: 1, text: 'Learn Vue.js', completed: true },
    { id: 2, text: 'Learn Pinia', completed: false },
    { id: 3, text: 'Build a Todo App', completed: false }
  ])

  const todoCategory = ref<string>('all') // 记录当前的分类

  const editingIndex = ref<number>(-1) // 记录当前编辑的索引

  const isAllCompleted = computed(() => {
    return todos.value.every(todo => todo.completed)
  })

  const leftCount = computed(() => { // 未完成的个数
    return todos.value.filter(todo => !todo.completed).length
  })

  function toggleAll() {
    console.log(isAllCompleted)
    if (isAllCompleted.value) {
      todos.value.forEach(todo => {
        todo.completed = false
      })
    } else {
      todos.value.forEach(todo => {
        todo.completed = true
      })
    }
  }

  function addTodo(text: string) {
    const newTodo: Todo = {
      id: todos.value.length + 1,
      text,
      completed: false
    }
    todos.value.push(newTodo)
  }

  function deleteTodo(id: number) {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  function clearCompleted() {
    todos.value = todos.value.filter(todo => !todo.completed)
  }


  return {
    todos,
    todoCategory,
    editingIndex,
    isAllCompleted,
    leftCount,
    addTodo,
    toggleAll,
    deleteTodo,
    clearCompleted
  }
})
