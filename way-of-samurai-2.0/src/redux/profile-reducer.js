import {userAPI} from './../api/api'

let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET_USER_PROFILE';
let GET_USER_PROFILE = 'GET_USER_PROFILE';
let initialState = {
    myPosts:[
        { id:1, text:"Hi, it's my first post" },
        { id:2, text:"Hi, it's my second post" },
        { id:3, text:"Hi, it's my third post" },
        { id:4, text:"Hi, it's my fourth post" },
    ],
    newPostText: 'Moi, tannan ',
    userProfile:null
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
        case SET_USER_PROFILE:
            return{...state, userProfile:action.userProfile}
        case GET_USER_PROFILE:
            return{...state, userProfile:action.userProfile}
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({type:ADD_POST})
export const updateNewPostActionCreator = (newText) => ({type:UPDATE_NEW_POST_TEXT, newText:newText})
export const setUserProfile = (userProfile) => ({type:SET_USER_PROFILE, userProfile:userProfile})
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId)
        .then(data=>{
            dispatch(setUserProfile(data))
        })
}
export default profileReducer;