import { ActionContext, ActionTree } from "vuex/types/index.js";
import { State } from "./states";
import { Mutations, MutationType } from "./mutations";

export enum ActionTypes {
    GetTodoItems = 'GET_ITEMS'
}

type ActionArguments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

export type Actions = {
    [ActionTypes.GetTodoItems]: (context: ActionArguments) => void
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.GetTodoItems]: async ({ commit }) => {
        commit(MutationType.SetLoading, true)

        await delay(1000)

        commit(MutationType.SetLoading, false)
        commit(MutationType.SetItems, [])
    }
}