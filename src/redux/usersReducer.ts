import { userApiData } from '../api/api';

const SHOW_MORE = 'SHOW-MORE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const TOTAL_USERS = 'TOTAL-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const IS_FETCHING = 'IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';


export type InitialStateType = {
    usersData: { id: number, followed: boolean, name: string, status: string, city: string, photos: { small: string | null, large: string | null } }[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: []
}

let initialState: InitialStateType = {
    usersData: [
        { id: 1, followed: true, name: 'Dmitry K.', status: 'I am super teacher', city: 'Frankfurt', photos: { small: 'https://i.pinimg.com/originals/c0/b7/7f/c0b77faeb2cb3e67fd1b423c4535f6c3.jpg', large: null } },
        { id: 2, followed: true, name: 'Anna S.', status: 'Everyone is absolutelly awesome!', city: 'Paris', photos: { small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb0XSWbIbtAUux1Vr13RX2ot-eMMVplo4rk5ccK1Nw-F-_62CF&usqp=CAU', large: null } },
        { id: 3, followed: false, name: 'Peter W.', status: 'Love my job..!', city: 'San-Francisco', photos: { small: 'https://cdn140.picsart.com/316823292072201.jpg?type=webp&to=min&r=640', large: null } },
        { id: 4, followed: true, name: 'Paulo L.', status: 'Let`s do something...', city: 'Rome', photos: { small: 'https://www.caricature-art.com/wp-content/uploads/2019/01/%D0%A8%D0%B5%D1%80%D0%BB%D0%BE%D0%BA-785x785.jpg', large: null } }
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
}


const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                usersData: [...action.users]
            }
        case SHOW_MORE:
            let newData = [
                { id: 5, name: 'Dmitry K.', status: 'I am super teacher', city: 'Frankfurt', photos: { small: 'https://i.pinimg.com/originals/c0/b7/7f/c0b77faeb2cb3e67fd1b423c4535f6c3.jpg', large: null } },
                { id: 6, name: 'Anna S.', status: 'Everyone is absolutelly awesome!', city: 'Paris', photos: { small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb0XSWbIbtAUux1Vr13RX2ot-eMMVplo4rk5ccK1Nw-F-_62CF&usqp=CAU', large: null } },
                { id: 7, name: 'Peter W.', status: 'Love my job..!', city: 'San-Francisco', photos: { small: 'https://cdn140.picsart.com/316823292072201.jpg?type=webp&to=min&r=640', large: null } },
                { id: 8, name: 'Paulo L.', status: 'Let`s do something...', city: 'Rome', photos: { small: 'https://www.caricature-art.com/wp-content/uploads/2019/01/%D0%A8%D0%B5%D1%80%D0%BB%D0%BE%D0%BA-785x785.jpg', large: null } }
            ];

            return {
                ...state,
                usersData: [...state.usersData, ...newData]
            }
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }
        case TOTAL_USERS:
            return {
                ...state,
                totalUsersCount: action.userCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case IS_FETCHING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.progressFollowing ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

type ShowMoreActionType = {
    type: typeof SHOW_MORE
}
export const showMore = (): ShowMoreActionType => ({ type: SHOW_MORE });

type FollowStatusActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followStatus = (userId: number): FollowStatusActionType => ({ type: FOLLOW, userId });

type UnfollowStatusActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowStatus = (userId: number): UnfollowStatusActionType => ({ type: UNFOLLOW, userId });

type SetUsersActionType = {
    type: typeof SET_USERS
    users: any
}
export const setUsers = (user: any): SetUsersActionType => ({ type: SET_USERS, users: user });

type SetUsersCountActionType = {
    type: typeof TOTAL_USERS
    userCount: number
}
export const setUsersCount = (userCount: number): SetUsersCountActionType => ({ type: TOTAL_USERS, userCount: userCount });

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });

type IsFetchingActiontype = {
    type: typeof IS_FETCHING
    isLoading: boolean
}
export const isFetching = (isLoading: boolean): IsFetchingActiontype => ({ type: IS_FETCHING, isLoading });

type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_FOLLOWING_PROGRESS
    progressFollowing: boolean
    userId: number
}
export const toggleFollowingProgress = (progressFollowing: boolean, userId: number): ToggleFollowingProgressActionType => ({ type: TOGGLE_FOLLOWING_PROGRESS, progressFollowing, userId })


export const getUsersThunk = (pageSize: number, currentPage: number) => {
    return (dispatch: any) => {
        dispatch(isFetching(true));
        dispatch(setCurrentPage(currentPage));
        userApiData.getUsers(pageSize, currentPage).then((respons: any) => {
            dispatch(setUsers(respons.data.items));
            dispatch(setUsersCount(respons.data.totalCount));
            dispatch(isFetching(false));
        })
    }
}

export const changePageThunk = (pageNumber: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(isFetching(true));
        dispatch(setCurrentPage(pageNumber));
        userApiData.getUsers(pageSize, pageNumber).then((respons: any) => {
            dispatch(setUsers(respons.data.items));
            dispatch(isFetching(false));
        })
    }
}

export const followThunk = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId));
        userApiData.followedUser(userId).then((respons: any) => {
            if (respons.data.resultCode === 0) {
                dispatch(followStatus(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
    }
}

export const unfollowThunk = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        userApiData.unFollowedUser(userId).then((respons: any) => {
            if (respons.data.resultCode === 0) {
                dispatch(unfollowStatus(userId));
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}


export default usersReducer;