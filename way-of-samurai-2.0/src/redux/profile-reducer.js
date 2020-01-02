import {userAPI, profileAPI} from './../api/api'
import {stopSubmit} from 'redux-form'

let ADD_POST = 'ADD-POST';
let SET_USER_PROFILE = 'SET_USER_PROFILE';
let DELETE_POST = 'DELETE_POST';
let SET_STATUS = 'SET_STATUS';
let SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
        case DELETE_POST:
            return{...state,
                myPosts:state.myPosts.filter(p => p.id !== action.postId)
                        }
        case SET_USER_PROFILE:
            return{...state, userProfile:action.userProfile}
        case SET_STATUS:
            return{...state, status:action.status}
        case SAVE_PHOTO_SUCCESS:
            return{...state, userProfile:{...state.userProfile, photos:action.photos}}
        default: 
            return state;
    }
}

//ActionCreator
export const addPostActionCreator = (newPostBody) => ({type:ADD_POST, newPostBody})
export const deletePost = (postId) => ({type:DELETE_POST, postId})
export const setUserProfile = (userProfile) => ({type:SET_USER_PROFILE, userProfile})
export const setStatus = (status) => ({type:SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type:SAVE_PHOTO_SUCCESS, photos})
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
export const savePhoto = (file) => (dispatch) => {
    profileAPI.savePhoto(file)
        .then(responce=>{
            if(responce.resultCode === 0){
                dispatch(savePhotoSuccess(responce.data.photos))
            }
        })
}
export const saveProfile = (dataProfile) =>  async (dispatch, getState) => {
    let userId = getState().auth.id
    let response = await profileAPI.saveProfile(dataProfile)
    if(response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('login', {_error:response.data.messages[0]}))
    }
    
}
export default profileReducer;