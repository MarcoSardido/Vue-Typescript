<script setup lang="ts">
import { useStore } from '../store';
import { MutationType } from '../store/mutations';

const props = defineProps({
    itemData: {
        type: Object,
        required: true
    }
})
const { itemData } = props
const store = useStore()

const toggleCompletion = () => {
    store.commit(MutationType.CompletedItem, {
        id: itemData.id,
        completed: !itemData.completed,
    });
};
</script>
<template>
    <div class="flex items-center bg-white rounded-md shadow-md m-2 p-1 border-4"
        :class="itemData.completed ? 'border-green-500' : 'border-white'">
        <div class="flex-shrink-0 m-1 ml-3 align-middle">
            <input type="checkbox" :checked="itemData.completed" @change="toggleCompletion()">
        </div>
        <div class="ml-6">
            <h4 v-if="itemData.completed" class="text-xl text-gray-900 leading-tight"><del>{{ itemData.title }}</del></h4>
            <h4 v-else class="text-xl text-gray-900 leading-tight">{{ itemData.title }}</h4>
        </div>
    </div>
</template>
<style scoped></style>