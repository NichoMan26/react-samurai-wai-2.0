let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
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
        if(action.type === ADD_POST){
            let newPost = {id:this._state.profilePage.myPosts.length + 1, text:this._state.profilePage.newPostText}
            this._state.profilePage.myPosts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscrober(this._state)
        } else if(action.type === UPDATE_NEW_POST_TEXT ){
            this._state.profilePage.newPostText = action.newText
            this._callSubscrober(this._state)
        } else if(action.type === ADD_MESSAGE ){
            this._state.dialogsPage.messages.push({id:this._state.dialogsPage.messages.length + 1, autor:'Denis', text:this._state.dialogsPage.newMessage})
            this._state.dialogsPage.newMessage = '';
            this._callSubscrober(this._state)
        } else if(action.type === UPDATE_MESSAGE_TEXT ){
            this._state.dialogsPage.newMessage = action.newText
            this._callSubscrober(this._state)
        }
    },
    getState(){
        return this._state
    }
}

export const addPostActionCreator = () => ({type:ADD_POST})
export const updateNewPostActionCreator = (newText) => ({type:UPDATE_NEW_POST_TEXT, newText:newText})
export const addMessageActionCreator = () => ({type:ADD_MESSAGE})
export const updateNewMessageActionCreator = (newMessage) => ({type:UPDATE_MESSAGE_TEXT,  newText:newMessage})
window.store = store
export default store;