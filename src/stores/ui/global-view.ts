import RootStore from "../root-store";
import {autorun, makeObservable} from "mobx";


export default class GlobalView {
    constructor(rootStore: RootStore) {
        autorun(() => console.log(
            `We have ${rootStore.dataStores.usersStore.collection.length} users.
            User Names: ${rootStore.dataStores.usersStore.collection.map(
                user=> user.name
            )}.
            We have ${rootStore.dataStores.todoStore.todolist.length} Todos!
            Todo Items: ${rootStore.dataStores.todoStore.todolist.map(
                todo => todo.name
            )}.`
        ))
    }
}