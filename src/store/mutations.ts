import { MutationTree } from 'vuex/types/index.js'
import { State, TodoItem } from './states'

export enum MutationType {
    CreateItem = 'CREATE_ITEM',
    SetItems = 'SET_ITEMS',
    CompletedItem = 'COMPLETED_ITEM',
    SetLoading = 'SET_LOADING'
}

export type Mutations = {
    [MutationType.CreateItem]: (state: State, item: TodoItem) => void
    [MutationType.SetItems]: (state: State, item: TodoItem[]) => void
    [MutationType.CompletedItem]: (state: State, item: Partial<TodoItem> & { id: number }) => void
    [MutationType.SetLoading]: (state: State, value: boolean) => void


}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.CreateItem]: (state: State, item: TodoItem) => {
        state.items.push(item)
    },
    [MutationType.SetItems]: (state: State, items: TodoItem[]) => {
        state.items = items
    },
    [MutationType.CompletedItem]: (state: State, newItem: Partial<TodoItem> & { id: number }) => {
        const item = state.items.findIndex(findItem => findItem.id === newItem.id)
        if (item === -1) return
        state.items[item] = {...state.items[item], ...newItem}
    },
    [MutationType.SetLoading]: (state: State, value: boolean) => {
        state.loading = value
    }
}