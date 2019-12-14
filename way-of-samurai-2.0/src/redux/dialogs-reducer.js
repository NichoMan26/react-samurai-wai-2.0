let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            return{
                ...state, 
                newMessage:'',
                messages:[...state.messages, 
                    {id:state.messages.length + 1, 
                        autor:'Denis', 
                        text:state.newMessage}
                    ]
            }
        case UPDATE_MESSAGE_TEXT:
            return{...state, newMessage:action.newText}
                default: 
            return state;
    }
}
export const addMessageActionCreator = () => ({type:ADD_MESSAGE})
export const updateNewMessageActionCreator = (newMessage) => ({type:UPDATE_MESSAGE_TEXT,  newText:newMessage})
export default dialogsReducer;