let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
let SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
let initialState = {
    users:[],
    pageSize:10,
    totalUsersCount:0,
    currentPage:1,
    isFetching: true
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
        
        default: 
            return state;
    }
}

export const followAC = (userId) => ({type:FOLLOW, userId})
export const unFollowAC = (userId) => ({type:UNFOLLOW, userId})
export const setUserAC = (users) => ({type:SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount) => ({type:SET_USERS_TOTAL_COUNT, totalUsersCount})
export const setFetchingAC = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})
export default usersReducer;