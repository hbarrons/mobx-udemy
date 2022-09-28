import {computed, makeObservable, observable} from "mobx";
import RootStore from "../../root-store";


let runningId = 0

export default class User {
    id: number = runningId++

    @observable name: string = '';

    private readonly rootStore: RootStore

    constructor(name: string, rootStore: RootStore) {
        makeObservable(this)

        this.name = name;
        this.rootStore = rootStore;

        rootStore.dataStores.todoStore.addToDo('Finish the course!', this.id)
    }

    @computed
    get todos() {
        return this.rootStore.dataStores.todoStore.getUserTodos(this.id)
    }

    @computed
    get completed() {
        return this.todos.filter(todo => todo.isCompleted)
    }

    @computed
    get incomplete() {
        return this.todos.filter(todo => !todo.isCompleted)
    }
}