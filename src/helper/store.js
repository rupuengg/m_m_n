import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const middlewares = [];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;