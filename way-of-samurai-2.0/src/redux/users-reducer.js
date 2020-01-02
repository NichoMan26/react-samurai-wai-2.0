import {userAPI} from './../api/api'

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
let SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
let initialState = {
    users:[],
    pageSize:100,
    totalUsersCount:0,
    currentPage:1,
    isFetching: true,
    followingInProgress:[]
}
const usersReducer = (state = initialState, action) => {
    switch(action.type){

        case FOLLOW: 
            return {...state, users:state.users.map(u => {
                if (u.id === action.userId){
                    return {...u, followed:true}
                }
                return u
                }
            ) }
        
        case UNFOLLOW: 
            return {...state, users:state.users.map(u => {
                if (u.id === action.userId){
                    return {...u, followed:false}
                }
                return u
                }
            ) }
        
        case SET_USERS: 
            return {...state, users:[...action.users]}

        case SET_CURRENT_PAGE: 
            return {...state, currentPage:action.currentPage}

        case SET_USERS_TOTAL_COUNT: 
            return {...state, totalUsersCount:action.totalUsersCount}

        case TOGGLE_IS_FETCHING: 
            return {...state, isFetching:action.isFetching}
        
        case TOGGLE_IS_FOLLOWING_PROGRESS: 
            return {...state, 
                followingInProgress:action.isFetching
                ?[...state.followingInProgress, action.userId]
                :[state.followingInProgress.filter(id => id !== action.userId)]}
        
        default: 
            return state;
    }
}

export const followSuccess = (userId) => ({type:FOLLOW, userId})
export const unFollowSuccess = (userId) => ({type:UNFOLLOW, userId})
export const setUsers = (users) => ({type:SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type:SET_USERS_TOTAL_COUNT, totalUsersCount})
export const setToggleFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress= (isFetching, userId) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (page,pageSize) =>{
    
    return(dispatch) => {
        dispatch(setToggleFetching(true))
   
        userAPI.getUsers(page, pageSize)
      .then(data => {
            dispatch(setUsers(data.items))
            dispatch(setCurrentPage(page))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setToggleFetching(false))
        })
    }
} 
export const unFollow = (userId) =>{
    
    return(dispatch) => {
        dispatch(toggleFollowingProgress(true,userId))
        userAPI.unFollow(userId)
        .then(data=>{
            if(data.resultCode === 0){
                dispatch(unFollowSuccess(userId))
            };
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
} 
export const follow = (userId) =>{
    
    return(dispatch) => {
        dispatch(toggleFollowingProgress(true,userId))
        userAPI.follow(userId)
        .then(data=>{
            if(data.resultCode === 0){
                dispatch(followSuccess(userId))
            };
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
} 

export default usersReducer;