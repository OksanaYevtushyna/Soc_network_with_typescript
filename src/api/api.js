import * as axios from 'axios';


let instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'b17a4b43-f03a-4a98-8b47-b5cfa5395027'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const getApiData = {
    getUsers(pageSize = 10, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    },
    unFollowedUser(userId) {
        return instance.delete(`follow/${userId}`)
    },
    followedUser(userId) {
        return instance.post(`follow/${userId}`, {})
    },
    authMe() {
        return instance.get(`auth/me`)
    },
    getUserId(userId) {
        return instance.get(`profile/${userId}`)
    }
}
