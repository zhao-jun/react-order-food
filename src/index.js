import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory,hashHistory , Router, Route, IndexRoute } from 'react-router';

import Index from './components/Index/Index';
import MainContainer from './containers/MainContainer/MainContainer';
import CartContainer from './containers/CartContainer/CartContainer';
import rootReducer from './reducers/index'


const thunkMiddleware = store => next => action =>
    typeof action === 'function' ?
        action(store.dispatch, store.getState) :
        next(action);
const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result
};
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware,logger)
);

ReactDOM.render(
    <Provider store = {store}>
        <Router history = {hashHistory}>
            <Route path="/" component = {Index}>
                <IndexRoute component = {MainContainer} />
                <Route path="/cart" component = {CartContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);