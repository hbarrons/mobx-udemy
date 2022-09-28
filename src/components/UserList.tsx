import React, {useState} from "react";
import {useStore} from "../stores/Helper/use-store";
import {observer} from "mobx-react";
import TodoList from "./TodoList";


const UserList = () => {
    const {dataStores: {usersStore}} = useStore();
    const [text, setText] = useState('');
    const [currentUser, setCurrentUser] = useState(usersStore.collection[0]);

    const addUser = () => {
        if (text.length <= 2) {
            alert('Enter a User Name');
            return;
        }

        usersStore.addUser(text);
        setCurrentUser(usersStore.collection[usersStore.collection.length-1])
        setText('')
    }

    return (
        <div className="row">
            <div className="col-sm-4">
                <div className="input-group">
                    <input className="form-group" type="text" value={text} onChange={e => setText(e.target.value)}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={addUser}>
                            Add User
                        </button>
                    </div>
                </div>
                <ul className="list-group">
                    {usersStore.collection.map(user => (
                        <li onClick={() => setCurrentUser(user)} key={user.id} className={`list-group-item ${currentUser.id === user.id ? 'active' : 'hover'}`}>
                            <span>{user.name}</span>
                            <button className="btn btn-danger float-end" onClick={()=>usersStore.removeUser(user.name)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-sm-8">
                <TodoList user={currentUser}/>
            </div>
        </div>
    )
}

export default observer(UserList);