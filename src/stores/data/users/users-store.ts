import RootStore from "../../root-store";
import {action, makeObservable, observable} from "mobx";
import User from "./user";


export default class UserStore {
    @observable collection: User[] = [];

    private readonly rootStore: RootStore;

    constructor(rootStore: RootStore) {
        makeObservable(this)

        this.rootStore = rootStore
    }

    @action
    addUser(name: string){
        this.collection.push(new User(name, this.rootStore))
    }

    getUser(name: string){
        return this.collection.find(user => user.name === name) as User
    }

    @action
    removeUser(name: string){
        const user = this.getUser(name)

        if (user){
            user.todos.forEach(todo => this.rootStore.dataStores.todoStore.removeToDo(todo.name))
            const userIdxToRemove = this.collection.indexOf(user)
            this.collection.splice(userIdxToRemove, 1)

        }
    }
}