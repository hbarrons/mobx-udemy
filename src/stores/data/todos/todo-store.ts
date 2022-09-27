import {action, computed, makeObservable, observable, reaction, when} from "mobx";
import ToDo from './todo'

export default class TodoStore {
    @observable todolist: ToDo[] = []

    constructor() {
        makeObservable(this)

        reaction(
            () => this.todolist.length,
            () => {
                console.log(`Total: ${this.todolist.length}, Completed: ${this.completed.length}, Incomplete: ${this.incomplete.length}`)
            }
        )

        when(
            () => this.todolist.length > 0 && this.todolist.every(todo => todo.isCompleted),
            () => console.log('Great Work!')
        )

    }

    @action
    addToDo(name: string, userId: number) {
        this.todolist.push(new ToDo(name, userId, this))
    }

    getUserTodos(userId: number){
        return this.todolist.filter(todo => todo.userId === userId)
    }

    @action
    getToDo(name: string){
        return this.todolist.find(todo => todo.name === name)
    }

    @action
    removeToDo(id: number) {
        const todoToRemove = this.todolist.find(todo => todo.id === id)

        if (todoToRemove) {
            todoToRemove.dispose();
            const todoIndex = this.todolist.indexOf(todoToRemove)
            this.todolist.splice(todoIndex, 1)
        }
    }

    @computed
    get completed() {
        return this.todolist.filter(todo => todo.isCompleted)
    }

    @computed
    get incomplete() {
        return this.todolist.filter(todo => !todo.isCompleted)
    }

}
