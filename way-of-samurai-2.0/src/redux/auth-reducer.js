import {authAPI} from './../api/api'
import {stopSubmit} from 'redux-form'

let auth_SET_USER_DATA = 'auth_SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case auth_SET_USER_DATA:
            return{...state, ...action.data,}
            
        default: 
            return state;
    }
}

export const setAuthUserData = (id,email,login,isAuth) => ({type:auth_SET_USER_DATA, data:{id,email,login,isAuth}})

export const getAuthUserData = () => async (dispatch) => {
    let responce = await authAPI.me()
        if(responce.data.resultCode === 0){
            let {id, email, login} = responce.data.data
            dispatch(setAuthUserData(id, email, login , true))
        };
}

export const login = (email, password, rememberMe) => async(dispatch) => {

    let responce = await authAPI.login(email, password, rememberMe)
        if(responce.data.resultCode === 0){
            dispatch(getAuthUserData())
        } else {
            let message = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error:message}))
        };
}

export const logout = () => async (dispatch) => {
    let responce = await authAPI.logout()
        if(responce.data.resultCode === 0){
            dispatch(setAuthUserData(null, null, null ,false))
        }
}
export default authReducer;