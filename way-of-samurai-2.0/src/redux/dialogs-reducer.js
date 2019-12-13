let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            state.messages.push({id:state.messages.length + 1, autor:'Denis', text:state.newMessage})
            state.newMessage = '';
            return state
        case UPDATE_MESSAGE_TEXT:
            state.newMessage = action.newText
            return state
                default: 
            return state;
    }
}
export const addMessageActionCreator = () => ({type:ADD_MESSAGE})
export const updateNewMessageActionCreator = (newMessage) => ({type:UPDATE_MESSAGE_TEXT,  newText:newMessage})
export default dialogsReducer;