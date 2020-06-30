import { getApiData } from '../api/api';


const SET_USER_DATA = 'SET_USER_DATA';
const IS_LOADING = 'IS_LOADING';
const LOGIING_OUT = 'LOGIING_OUT';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case LOGIING_OUT:
            return {
                ...state,
                isAuth: true
            }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });
export const isFetching = (isLoading) => ({ type: IS_LOADING, isLoading });
export const authChange = () => ({ type: LOGIING_OUT })

export const authUserThunk = () => {
    return (dispatch) => {
        dispatch(isFetching(true))
        getApiData.authMe().then(respons => {
            if (respons.data.resultCode === 0) {
                let { id, email, login } = respons.data.data;
                dispatch(setAuthUserData(id, email, login));
                dispatch(isFetching(false));
            }
        })
    }
}


export default authReducer;