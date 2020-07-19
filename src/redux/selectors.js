import { createSelector } from 'reselect';



const getUsers = (state) => {
    return state.usersReducer.usersData
}

export const getUsersData = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state) => {
    return state.usersReducer.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersReducer.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersReducer.currentPage
}

export const isLoading = (state) => {
    return state.usersReducer.isLoading
}

export const getFollowingInProgress = (state) => {
    return state.usersReducer.followingInProgress
}

