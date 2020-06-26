import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import {UserReducer} from  './UserReducer'
import thunk from 'redux-thunk';

const store = createStore(UserReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store