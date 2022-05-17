import { createStore } from 'redux'
import { usereducer } from './user/user.reducer'


export const store = createStore(
    usereducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )