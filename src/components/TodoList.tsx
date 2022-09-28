import React, {FunctionComponent, useState} from "react";
import {useStore} from "../stores/Helper/use-store";
import TodoComponent from "./Todo";
import {observer} from "mobx-react";
import User from "../stores/data/users/user";

interface Props {
    user ? : User;
}


const TodoList: FunctionComponent<Props> = ({user}) => {
    const {dataStores: {todoStore}} = useStore()
    const [text, setText] = useState('');

    const addTodo = () => {
        if (text.length <= 2) {
            alert('Enter a Todo Item');
            return;
        }

        todoStore.addToDo(text, user ? user.id : 999);
        setText('')
    }

    const completedTodos = user ? user.completed : todoStore.completed
    const incompleteTodos = user ? user.incomplete : todoStore.incomplete

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
                    Incomplete Todos ({incompleteTodos.length})
                </div>
                <ul className="list-group">
                    {incompleteTodos.map(todo => <TodoComponent key={todo.id} todo={todo} />)}
                </ul>
            </div>
            <div className="card">
                <div className="card-header">
                    Complete Todos ({completedTodos.length})
                </div>
                <ul className="list-group">
                    {completedTodos.map(todo => <TodoComponent key={todo.id} todo={todo} />)}
                </ul>
            </div>
        </div>

    )
}

export default observer(TodoList)