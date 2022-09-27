import React, {useState} from "react";
import {useStore} from "../stores/Helper/use-store";
import TodoComponent from "./Todo";
import {observer} from "mobx-react";


const TodoList = () => {
    const {dataStores: {todoStore}} = useStore()
    const [text, setText] = useState('');

    const addTodo = () => {
        if (text.length <= 2) {
            alert('Enter a Todo Item');
            return;
        }

        todoStore.addToDo(text, 999);
        setText('')
    }

    return (
        <div>
            <div className="input-group">
                <input className="form-group" type="text" value={text} onChange={e => setText(e.target.value)}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={addTodo}>
                        Add Todo
                    </button>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    Incomplete Todos ({todoStore.incomplete.length})
                </div>
                <ul className="list-group">
                    {todoStore.incomplete.map(todo => <TodoComponent key={todo.id} todo={todo} />)}
                </ul>
            </div>
            <div className="card">
                <div className="card-header">
                    Complete Todos ({todoStore.completed.length})
                </div>
                <ul className="list-group">
                    {todoStore.completed.map(todo => <TodoComponent key={todo.id} todo={todo} />)}
                </ul>
            </div>
        </div>

    )
}

export default observer(TodoList)