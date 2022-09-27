import React from 'react';
import './App.css';
import {useStore} from "./stores/Helper/use-store";
import {Views} from "./stores/ui/global-view";
import {observer} from "mobx-react";
import TodoList from "./components/TodoList";



function App() {

    const {uiStores: {globalView}} = useStore()

    const getCurrentView = () => {
        if (globalView.currentView === Views.Todos) {
            return <TodoList />
        }

        if (globalView.currentView === Views.Users) {
            return <div>Users</div>
        }
    }

    return (
        <div className="App">
            <nav className="navbar navbar-dark bg-dark">
                <div style={{flexDirection: 'row'}} className="navbar-nav">
                    <span style={{padding: '10px'}} className={`nav-item ${globalView.currentView === Views.Todos ? 'active' : null}`}>
                        <a className="nav-link" onClick={()=> globalView.updateView(Views.Todos)} href="#">{`${Views.Todos}`} View</a>
                    </span>
                    <br/>
                    <span style={{padding: '10px'}} className={`nav-item ${globalView.currentView === Views.Users ? 'active' : null}`}>
                        <a className="nav-link" onClick={()=> globalView.updateView(Views.Users)} href="#">{`${Views.Users}`}  View</a>
                    </span>
                </div>
            </nav>

            {getCurrentView()}
        </div>
    )
}

export default observer(App);
