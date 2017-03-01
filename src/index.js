import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import Main from './components/Main/Main';
import rootReducer from './reducers/index'

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store = {store}>
        <Main />
    </Provider>,
    document.getElementById('app')
)