<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../store';
import TodoItem from './TodoItem.vue';

const store = useStore()
const items = computed(() => store.state.items)
</script>
<template>
    <div>
        <TodoItem v-for="item in items" :key="item" :itemData="item" />
    </div>
</template>
<style scoped>

</style>