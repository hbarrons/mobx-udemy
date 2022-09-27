import React from 'react';
import './App.css';
import Test from './reacttest';
import {useStore} from "./stores/Helper/use-store";



function App() {
    const {dataStores: {todoStore}} = useStore()
    return (
    <div className="App">
        {todoStore.todolist.map(todo => <div key={todo.id}>{todo.name}</div>)}
    </div>
    );
}

export default App;
