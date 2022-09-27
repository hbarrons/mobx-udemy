import {action, makeObservable, observable, reaction} from "mobx";
import TodoStore from "./todo-store";


let runningId = 0

export default class ToDo {
    id: number = runningId++

    userId: number;

    @observable name: string = '';
    @observable isCompleted: boolean = false;

    private todoStore: TodoStore

    private readonly disposer: () => void;

    constructor(name: string, userId: number, todoStore: TodoStore) {
        makeObservable(this)

        this.name = name
        this.userId = userId
        this.todoStore = todoStore

        this.disposer = reaction(
            () => this.isCompleted,
            () => {
                console.log(`${this.name} status changed to ${this.isCompleted ? 'Complete' : 'Incomplete'}.`)
            }
        )
    }

    @action
    updateName (name: string) {
        this.name = name
    }

    @action
    remove() {
        this.todoStore.removeToDo(this.id);
    }

    @action
    toggleToDo(){
        this.isCompleted = !this.isCompleted
    }

    dispose() {
        this.disposer();
    }
}