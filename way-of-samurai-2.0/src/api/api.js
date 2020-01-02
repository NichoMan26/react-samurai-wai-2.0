import * as axios from 'axios'

export const instance = axios.create({
    withCredentials:true,
    headers:{
        'API-KEY':'195f21f4-9f95-4fb6-95df-0aba30f3eb34'
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
})
export const userAPI = {
    getUsers(currentPage = 1,pageSize = 1){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
    },
    unFollow(userId){
        return instance.delete(`follow/${userId}`)
        .then(response => response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
        .then(response => response.data)
    },
    getProfile(userId){
        console.warn('Obsoled method. Please use "profileAPI" object')
        return profileAPI.getProfile(userId)
    }
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null){
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout(){
        return instance.delete(`auth/login`)
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
    },
    savePhoto(photoFile){
        let formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        .then(response => response.data)
    },
    saveProfile(dataProfile){
        return instance.put(`profile`, dataProfile)
    }
}
export const securityAPI = {
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`)
    },
}

