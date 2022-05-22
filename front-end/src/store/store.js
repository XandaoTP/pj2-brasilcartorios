import { combineReducers, createStore } from 'redux'
import { usereducer } from './user/user.reducer'

const rootReducer = combineReducers({
    userData: usereducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )