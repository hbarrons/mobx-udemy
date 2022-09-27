import React, {FunctionComponent} from "react";
import ToDo from "../stores/data/todos/todo";


interface Props {
    todo: ToDo
}

const TodoComponent: FunctionComponent<Props> = ({todo}) => {

    return (
        <li className="list-group-item">
            <span>Name: {todo.name}, UserId: {todo.userId}</span>
            <button className="float-end btn btn-danger" onClick={() => todo.remove()}>Remove</button>
        </li>
    )
}

export default TodoComponent