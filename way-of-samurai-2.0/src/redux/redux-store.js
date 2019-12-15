import {createStore, combineReducers} from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navReducer from "./nav-reducer";
import usersReducer from './users-reducer';


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    navBar:navReducer,
    usersPage:usersReducer
})

let store = createStore(reducers);
window.store = store
export default store;