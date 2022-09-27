import React, {FunctionComponent, useState} from "react";
import ToDo from "../stores/data/todos/todo";
import {observer} from "mobx-react";


interface Props {
    todo: ToDo
}

const TodoComponent: FunctionComponent<Props> = observer(({todo}) => {
    const [isEditing, setEditing] = useState(false);
    const [text, setText] = useState('')

    const saveTodo = () => {
        todo.updateName(text)
        setEditing(false)
        setText('')
    }

    const todoName = isEditing ? <input type="text" value={text} onChange={e => setText(e.target.value)}/> :
        <span>Name: {todo.name}, UserId: {todo.userId}</span>;

    const editButton = isEditing ? <button className="btn btn-primary float-end" onClick={saveTodo}>Save</button> :
        <button className="btn btn-info float-end" onClick={() => setEditing(true)}>Edit</button>

    const toggleTodo = isEditing ? null : <button className="btn btn-primary float-end" onClick={() => todo.toggleToDo()}>Toggle</button>

    const removeTodo = isEditing ? null : <button className="float-end btn btn-danger" onClick={() => todo.remove()}>Remove</button>
    return (
        <li className="list-group-item">
            {todoName}
            {editButton}
            {toggleTodo}
            {removeTodo}
        </li>
    )
})

export default TodoComponent