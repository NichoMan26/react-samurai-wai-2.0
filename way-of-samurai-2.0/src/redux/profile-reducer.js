let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    myPosts:[
        { id:1, text:"Hi, it's my first post" },
        { id:2, text:"Hi, it's my second post" },
        { id:3, text:"Hi, it's my third post" },
        { id:4, text:"Hi, it's my fourth post" },
    ],
    newPostText: 'Moi, tannan '
}
const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return{...state,
                myPosts:[...state.myPosts,
                    {id:state.myPosts.length + 1, 
                    text:state.newPostText},],
                    newPostText:'Moi, tannan '  
                        }
        case UPDATE_NEW_POST_TEXT:
            return{...state, newPostText:action.newText}
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({type:ADD_POST})
export const updateNewPostActionCreator = (newText) => ({type:UPDATE_NEW_POST_TEXT, newText:newText})
export default profileReducer;