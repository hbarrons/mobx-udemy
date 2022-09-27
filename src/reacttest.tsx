import React from "react";
import ToDo from "./stores/data/todos/todo";
import TodoStore from "./stores/data/todos/todo-store";
import {Observer, useObserver, observer} from "mobx-react";


const newTodo = new ToDo('New Todo', 99, new TodoStore())

const Test = observer(() => {
    console.log(newTodo.name);
    return (
        <div>
            <div>{newTodo.name}</div>
            <button onClick={()=>newTodo.updateName('first name')}>First Name</button>
            <button onClick={()=>newTodo.updateName('last name')}>Last Name</button>
        </div>
    )
});

export default Test;