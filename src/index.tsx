import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './test'
import './todo-service'
import RootStore from "./stores/root-store";
import {createStore} from "./stores/Helper/create-store";
import {StoreProvider} from "./stores/Helper/store-context";

const rootStore = createStore()

rootStore.dataStores.todoStore.addToDo('Connect MobX to React', 99)
rootStore.dataStores.todoStore.addToDo('Finish Udemy Course', 99)
rootStore.dataStores.todoStore.addToDo('Learn EIM mobx Code', 99)


ReactDOM.render(
    <StoreProvider value={rootStore}>
        <App />
    </StoreProvider>
    , document.getElementById('root')
)


