import {
    authAPI,
    securityAPI
} from './../api/api'
import {
    stopSubmit
} from 'redux-form'

let auth_SET_USER_DATA = 'auth_SET_USER_DATA';
let auth_SET_CAPTCHA_URL_SUCCESS = 'auth_SET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case auth_SET_USER_DATA:
            return {
                ...state, ...action.data,
            }
            case auth_SET_CAPTCHA_URL_SUCCESS:
                return {
                    ...state, captchaUrl: action.url,
                }

                default:
                    return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: auth_SET_USER_DATA,
    data: {
        id,
        email,
        login,
        isAuth
    }
})

export const setCaptchaUrlSuccess = (url) => ({
    type: auth_SET_CAPTCHA_URL_SUCCESS,
    url
})

export const getAuthUserData = () => async (dispatch) => {
    let responce = await authAPI.me()
    if (responce.data.resultCode === 0) {
        let {
            id,
            email,
            login
        } = responce.data.data
        dispatch(setAuthUserData(id, email, login, true))
    };
}

//Thunk
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    let responce = await authAPI.login(email, password, rememberMe, captcha)
    if (responce.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (responce.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        } 
        let message = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {
            _error: message
        }))
    };
}

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(setCaptchaUrlSuccess(captchaUrl))



}

export const logout = () => async (dispatch) => {
    let responce = await authAPI.logout()
    if (responce.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export default authReducer;