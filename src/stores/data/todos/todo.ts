import {action, makeObservable, observable, reaction} from "mobx";


let runningId = 0

export default class ToDo {
    id: number = runningId++

    userId: number;

    @observable name: string = '';
    @observable isCompleted: boolean = false;

    private disposer: () => void;

    constructor(name: string, userId: number) {
        makeObservable(this)

        this.name = name
        this.userId = userId

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