let ADD_MESSAGE = 'ADD-MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            return{
                ...state, 
                messages:[...state.messages, 
                    {id:state.messages.length + 1, 
                        autor:'Denis', 
                        text:action.messageBody}
                    ]
            }
        default: 
            return state;
    }
}
export const addMessageActionCreator = (messageBody) => ({type:ADD_MESSAGE, messageBody})
export default dialogsReducer;