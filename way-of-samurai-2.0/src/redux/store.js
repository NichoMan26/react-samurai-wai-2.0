import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navReducer from "./nav-reducer";

let store = { 
    _state: {
        profilePage:{
            myPosts:[
                { id:1, text:"Hi, it's my first post" },
                { id:2, text:"Hi, it's my second post" },
                { id:3, text:"Hi, it's my third post" },
                { id:4, text:"Hi, it's my fourth post" },
            ],
            newPostText: 'Denis'
        },
        dialogsPage:{
            posts: [
                { id:1, name:'Andrey' },
                { id:2, name:'Igor' },
                { id:3, name:'Valera' },
                { id:4, name:'Vova' },
            ],
            messages:[
                { id:1, autor:'Oleg', text:'Hi' },
                { id:2, autor:'Denis', text:'Hello' },
                { id:3, autor:'Oleg', text:'How are you?' },
                { id:4, autor:'Oleg', text:'Fine' },
            ],
            newMessage: '',
        }
        
        
    },
    _callSubscrober() {
    },
    subscribe(observer){ 
        this._callSubscrober = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer( this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action)
        this._state.navBar = navReducer( this._state.navBar, action)
        this._callSubscrober(this._state)
    },
    getState(){
        return this._state
    }
}



window.store = store
export default store;