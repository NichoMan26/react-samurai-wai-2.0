import * as axios from 'axios'

export const instance = axios.create({
    withCredentials:true,
    headers:{
        'API-KEY':'13e1fad0-e775-47f2-b84b-8fd8baaffa1e'
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
})
export const userAPI = {
    getUsers(currentPage = 1,pageSize = 1){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,{
        withCredentials:true,
        headers:{
            'API-KEY':'13e1fad0-e775-47f2-b84b-8fd8baaffa1e'
        }
    }).then(response => response.data)
    },
    unFollow(userId){
        return instance.delete(`follow/${userId}`,{
            withCredentials:true,
            headers:{
                'API-KEY':'13e1fad0-e775-47f2-b84b-8fd8baaffa1e'
            }
        }).then(response => response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`,{
            withCredentials:true,
            headers:{
                'API-KEY':'13e1fad0-e775-47f2-b84b-8fd8baaffa1e'
            }
        }).then(response => response.data)
    },
    getProfile(userId){
        console.warn('Obsoled method. Please use "profileAPI" object')
        return profileAPI.getProfile(userId)
    }
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}
export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
        .then(responce=>responce.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
        
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status: status})
    }
}
