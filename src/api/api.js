import * as axios from 'axios';


let instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'b17a4b43-f03a-4a98-8b47-b5cfa5395027'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const userApiData = {
    getUsers(pageSize = 10, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    },
    unFollowedUser(userId) {
        return instance.delete(`follow/${userId}`)
    },
    followedUser(userId) {
        return instance.post(`follow/${userId}`, {})
    }
}

export const profileApiData = {
    getUserId(userId) {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, { status })
    },
    changePhoto(photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfileContacts(profile) {
        return instance.put(`/profile`, profile)
    }
}

export const authApi = {
    authMe() {
        return instance.get(`auth/me`)
    },
    loginAuth(email, password, rememberMe, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securityApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}