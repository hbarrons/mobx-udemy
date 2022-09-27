import {action, makeObservable, observable, reaction} from "mobx";


let runningId = 0

export default class ToDo {
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