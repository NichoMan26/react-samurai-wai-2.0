let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {id:state.myPosts.length + 1, text:state.newPostText}
            state.myPosts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({type:ADD_POST})
export const updateNewPostActionCreator = (newText) => ({type:UPDATE_NEW_POST_TEXT, newText:newText})
export default profileReducer;