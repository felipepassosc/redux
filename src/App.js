import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

import logo from './logo.svg';
import './App.css';
import Login from "./components/login";
import MiniDrawer from "./components/menu";


class App extends Component {
  render(){

    return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <div className="App">
                <Login />
            </div>
        </Provider>
    );
  }
};

export default App;
