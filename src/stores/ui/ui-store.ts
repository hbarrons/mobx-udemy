import RootStore from "../root-store";
import {makeObservable} from "mobx";
import GlobalView from "./global-view";


export default class UiStore {
    globalView: GlobalView;

    constructor(rootStore: RootStore) {
        this.globalView = new GlobalView(rootStore)
    }
}