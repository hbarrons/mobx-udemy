import RootStore from "../root-store";
import {action, autorun, makeObservable, observable} from "mobx";

export enum Views {
    Todos = 'Todos',
    Users = 'Users'
}


export default class GlobalView {
    private rootStore: RootStore;

    @observable
    currentView: Views = Views.Todos;

    constructor(rootStore: RootStore) {
        makeObservable(this)
        this.rootStore = rootStore
    }

    @action
    updateView(view: Views) {
        this.currentView = view;
    }
}