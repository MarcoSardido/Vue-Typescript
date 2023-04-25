<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '../store';
import { TodoItem } from '../store/states';
import { MutationType } from '../store/mutations';

const store = useStore()
const todoInput = ref("")
const createTodo = () => {
    if (todoInput.value === '') return
    const item: TodoItem = {
        id: Date.now(),
        title: todoInput.value.trim(),
        completed: false
    }
    store.commit(MutationType.CreateItem, item)
    todoInput.value = ''
}
</script>
<template>
    <form class=" my-4" @submit.prevent="createTodo">
        <div class="mx-auto flex items-center bg-white p-2 rounded-md shadow-md">
            <div class="flex-grow m-1 ml-2">
                <input class=" w-full focus:outline-none" v-model="todoInput" type="text" placeholder="Enter new task">
            </div>
            <div class="flex-shrink-0">
                <button class=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded" type="submit">Add Todo</button>
            </div>
        </div>
    </form>
</template>
<style scoped>

</style>