import {action, computed, makeObservable, observable, reaction, when} from "mobx";

let runningId = 0

class ToDo {
    id: number = runningId++

    @observable name: string = '';
    @observable isCompleted: boolean = false;

    private disposer: () => void;

    constructor(name: string) {
        makeObservable(this)

        this.name = name

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
    toggleToDo(){
        this.isCompleted = !this.isCompleted
    }

    dispose() {
        this.disposer();
    }
}

class TodoList {
    @observable list: ToDo[] = []

    constructor() {
        makeObservable(this)

        reaction(
            () => this.list.length,
            () => {
                console.log(`Total: ${this.list.length}, Completed: ${this.completed.length}, Incomplete: ${this.incomplete.length}`)
            }
        )

        when(
            () => this.list.length > 0 && this.list.every(todo => todo.isCompleted),
            () => console.log('Great Work!')
        )

    }

    @action
    addToDo(name: string) {
        this.list.push(new ToDo(name))
    }

    @action
    removeToDo(name: string) {
        const todoToRemove = this.list.find(todo => todo.name === name)

        if (todoToRemove) {
            todoToRemove.dispose();
            const todoIndex = this.list.indexOf(todoToRemove)
            this.list.splice(todoIndex, 1)
        }
    }

    @computed
    get completed() {
        return this.list.filter(todo => todo.isCompleted)
    }

    @computed
    get incomplete() {
        return this.list.filter(todo => !todo.isCompleted)
    }

}


export {};