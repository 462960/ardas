import React from 'react';
import ReactDOM from 'react-dom';
//import { Route } from 'react-router';
//import {BrowserRouter, Route} from 'react-router-dom';
//import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
require('./sass/styles');
// import {Provider} from 'react-redux';
// import { store, history } from './store';
//import { App } from './components/App';
import { Item } from './components/Item';
// import { Routes } from './components/Routes';
// import tasks from './data/tasksList';


 const root = (
    <Item />
	);

ReactDOM.render(root,
document.querySelector("#app"));

// const root = (
//   <HashRouter>
//     <App />
//   </HashRouter>
// 	);

// ReactDOM.render(root,
// document.querySelector("#app"));



