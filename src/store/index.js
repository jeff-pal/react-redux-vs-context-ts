import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const USER_INITIAL_STATE = {
    data: {
        id: 1,
        user: 'Redux'
    }
}

function userReducer(state = USER_INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, data: { id: action.id, user: action.user }}
        default:
            return state;
    }
}

const Store = createStore(userReducer, applyMiddleware(logger, thunkMiddleware));

export default Store;