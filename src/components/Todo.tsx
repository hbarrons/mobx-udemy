import React, {FunctionComponent} from "react";
import ToDo from "../stores/data/todos/todo";

interface Props {
    todo: ToDo
}

const TodoComponent: FunctionComponent<Props> = ({todo}) => {

    return (
        <li className="list-group-item">
            Name: {todo.name}, UserId: {todo.userId}
        </li>
    )
}

export default TodoComponent