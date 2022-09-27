import React from 'react';
import './App.css';
import {useStore} from "./stores/Helper/use-store";
import {Views} from "./stores/ui/global-view";
import {observer} from "mobx-react";


function App() {

    const {uiStores: {globalView}} = useStore()

    const getCurrentView = () => {
        if (globalView.currentView === Views.Todos) {
            return <div>Todos</div>
        }

        if (globalView.currentView === Views.Users) {
            return <div>Users</div>
        }
    }

    return (
        <div className="App">
            <nav className="navbar navbar-dark bg-dark">
                <div style={{flexDirection: 'row'}} className="navbar-nav">
                    <span className="nav-item active">
                        <a className="nav-link" onClick={()=> globalView.updateView(Views.Todos)} href="#">{`${Views.Todos}`} View</a>
                    </span>
                    <span className="nav-item active">
                        <a className="nav-link" onClick={()=> globalView.updateView(Views.Users)} href="#">{`${Views.Users}`}  View</a>
                    </span>
                </div>
            </nav>

            {getCurrentView()}
        </div>
    )
}

export default observer(App);
