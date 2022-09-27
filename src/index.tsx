import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './test'
import './todo-service'
import RootStore from "./stores/root-store";

const rootStore = new RootStore();

//create 4 users
rootStore.dataStores.usersStore.addUser('Howard')
rootStore.dataStores.usersStore.addUser('Nicole')
rootStore.dataStores.usersStore.addUser('Shelbie')
rootStore.dataStores.usersStore.addUser('Sam')

//get user
const newUser = rootStore.dataStores.usersStore.getUser('Howard')

//add todos to the user
rootStore.dataStores.todoStore.addToDo('Go to the gym', newUser.id);
rootStore.dataStores.todoStore.addToDo('Learn mobx', newUser.id)

//remove user
rootStore.dataStores.usersStore.removeUser('Howard')


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
