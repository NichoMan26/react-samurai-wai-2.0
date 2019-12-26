import {getAuthUserData} from './auth-reducer'

let INITIALAIZED_SUCCESS = 'INITIALAIZED_SUCCESS';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case INITIALAIZED_SUCCESS:
            return{...state, initialized: true,}
            
        default: 
            return state;
    }
}
export const initialaizedSuccess= () => ({type:INITIALAIZED_SUCCESS})
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initialaizedSuccess())
    })
}
export default appReducer;