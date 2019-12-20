import {createStore, combineReducers, applyMiddleware} from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navReducer from "./nav-reducer";
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    navBar:navReducer,
    usersPage:usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store
export default store;