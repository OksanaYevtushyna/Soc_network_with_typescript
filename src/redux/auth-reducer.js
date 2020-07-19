import { authApi } from '../api/api';
import { stopSubmit } from 'redux-form';
import { securityApi } from '../api/api';


const SET_USER_DATA = 'SET_USER_DATA';
const IS_LOADING = 'IS_LOADING';
const LOGIING_IN = 'LOGIING_IN';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captcha: action.captchaUrl
            }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });
export const isFetching = (isLoading) => ({ type: IS_LOADING, isLoading });
export const loggingIn = (email, password, rememberMe) => ({ type: LOGIING_IN, email, password, rememberMe });
export const getCaptchaUrl = (captchaUrl) => ({ type: GET_CAPTCHA_URL, captchaUrl });

export const authUserThunk = () => async (dispatch) => {
    dispatch(isFetching(true))
    let respons = await authApi.authMe()
    if (respons.data.resultCode === 0) {
        let { id, email, login } = respons.data.data;
        dispatch(setAuthUserData(id, email, login, true));
        dispatch(isFetching(false));
    }
}


export const loggingAuthThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
    dispatch(isFetching(true))
    let respons = await authApi.loginAuth(email, password, rememberMe, captcha)
    if (respons.data.resultCode === 0) {
        dispatch(authUserThunk());
        dispatch(isFetching(false));
    } else {
        if (respons.data.resultCode === 10) {
            dispatch(getCaptchaThunk());
        }
        let errorMessage = respons.data.messages.length > 0 ? respons.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', { _error: errorMessage }))
    }
}

export const logoutThunk = () => async (dispatch) => {
    dispatch(isFetching(true))
    let respons = await authApi.logout()
    if (respons.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
        dispatch(isFetching(false));
    }
}

export const getCaptchaThunk = () => async (dispatch) => {
    let response = await securityApi.getCaptchaUrl();
    dispatch(getCaptchaUrl(response.data.url))
}

export default authReducer;