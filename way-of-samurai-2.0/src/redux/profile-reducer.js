import {userAPI, profileAPI} from './../api/api'

let ADD_POST = 'ADD-POST';
let SET_USER_PROFILE = 'SET_USER_PROFILE';
// let GET_USER_PROFILE = 'GET_USER_PROFILE';
let SET_STATUS = 'SET_STATUS';
let initialState = {
    myPosts:[
        { id:1, text:"Hi, it's my first post" },
        { id:2, text:"Hi, it's my second post" },
        { id:3, text:"Hi, it's my third post" },
        { id:4, text:"Hi, it's my fourth post" },
    ],
    newPostText: 'Moi, tannan ',
    userProfile:null,
    status: ''
}
const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return{...state,
                myPosts:[...state.myPosts,
                    {id:state.myPosts.length + 1, 
                    text:action.newPostBody},], 
                        }
        case SET_USER_PROFILE:
            return{...state, userProfile:action.userProfile}
        // case GET_USER_PROFILE:
        //     return{...state, userProfile:action.userProfile}
        case SET_STATUS:
            return{...state, status:action.status}
        default: 
            return state;
    }
}

//ActionCreator
export const addPostActionCreator = (newPostBody) => ({type:ADD_POST, newPostBody})
export const setUserProfile = (userProfile) => ({type:SET_USER_PROFILE, userProfile:userProfile})
export const setStatus = (status) => ({type:SET_STATUS, status})
//ThunkCreator
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId)
        .then(data=>{
            dispatch(setUserProfile(data))
        })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(responce=>{
            dispatch(setStatus(responce.data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(responce=>{
            if(responce.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
}
export default profileReducer;