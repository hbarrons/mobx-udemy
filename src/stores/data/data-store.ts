import TodoStore from "./todos/todo-store";
import UsersStore from "./users/users-store";
import RootStore from "../root-store";
import {makeObservable} from "mobx";


export default class {
    todoStore: TodoStore;
    usersStore: UsersStore;

    constructor(rootStore: RootStore) {
        makeObservable(this)
        this.todoStore = new TodoStore();
        this.usersStore = new UsersStore();
    }
}