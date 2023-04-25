<script setup lang="ts">
import NewItem from './components/NewItem.vue';
import TodoList from './components/TodoList.vue';
import { computed, onMounted } from 'vue';
import { useStore } from './store';
import { ActionTypes } from './store/actions';

const store = useStore()
const loading = computed(() => store.state.loading)
const completedCount = computed(() => store.getters.completedCount)
const totalCount = computed(() => store.getters.totalCount)
onMounted(() => store.dispatch(ActionTypes.GetTodoItems))

</script>
<template>
  <div class=" w-1/2 mx-auto mt-4">
    <h1 class="text-3xl text-center p-2 font-bold">
      Vue 3 Todo App with Typescript and Vuex 4
    </h1>

    <div v-if="loading">
      <h3 class="text-center mt-4">Loading...</h3>
    </div>
    <div v-else >
      <p class="text-center mt-2">
        {{ completedCount }} of {{ totalCount }}
      </p>
    </div>
    <NewItem />
    <TodoList />
  </div>
</template>
<style scoped></style>