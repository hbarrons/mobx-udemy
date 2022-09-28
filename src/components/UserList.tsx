import React, {useState} from "react";
import {useStore} from "../stores/Helper/use-store";
import {observer} from "mobx-react";


const UserList = () => {
    const {dataStores: {usersStore}} = useStore();
    const [text, setText] = useState('');

    const addUser = () => {
        if (text.length <= 2) {
            alert('Enter a User Name');
            return;
        }

        usersStore.addUser(text);
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
                        <li className="list-group-item">
                            <span>{user.name}</span>
                            <button className="btn btn-danger" onClick={()=>usersStore.removeUser(user.name)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-sm-8">
                Todos
            </div>
        </div>
    )
}

export default observer(UserList);