import { GetterTree } from "vuex/types/index.js";
import { State } from "./states";

export type Getters = {
    completedCount: (state: State) => number
    totalCount: (state: State) => number
}

export const getters: GetterTree<State, State> & Getters = {
    completedCount: (state) => {
        return state.items.filter(item => item.completed).length
    },
    totalCount: (state) => {
        return state.items.length
    }
}