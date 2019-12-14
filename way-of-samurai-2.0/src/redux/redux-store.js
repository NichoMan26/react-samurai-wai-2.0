import {createStore, combineReducers} from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navReducer from "./nav-reducer";


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    navBar:navReducer,
})

let store = createStore(reducers);
window.store = store
export default store;