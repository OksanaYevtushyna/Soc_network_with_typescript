import { authApi } from '../api/api';
import { stopSubmit } from 'redux-form';
import { securityApi } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const IS_LOADING = 'IS_LOADING';
const LOGIING_IN = 'LOGIING_IN';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captcha: string | null
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
};

//type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
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

type setAuthUserDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: setAuthUserDataType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

export const isFetching = (isLoading: boolean) => ({ type: IS_LOADING, isLoading });

type LoggingInActionType = {
    type: typeof LOGIING_IN
    email: string
    password: string
    rememberMe: boolean
}

export const loggingIn = (email: string, password: string, rememberMe: boolean): LoggingInActionType => ({ type: LOGIING_IN, email, password, rememberMe });

type GetCaptchaUrlActionType = {
    type: typeof GET_CAPTCHA_URL
    captchaUrl: string
}

export const getCaptchaUrl = (captchaUrl: string): GetCaptchaUrlActionType => ({ type: GET_CAPTCHA_URL, captchaUrl });

export const authUserThunk = () => async (dispatch: any) => {
    dispatch(isFetching(true))
    let respons = await authApi.authMe()
    if (respons.data.resultCode === 0) {
        let { id, email, login } = respons.data.data;
        dispatch(setAuthUserData(id, email, login, true));
        dispatch(isFetching(false));
    }
}


export const loggingAuthThunk = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
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

export const logoutThunk = () => async (dispatch: any) => {
    dispatch(isFetching(true))
    let respons = await authApi.logout()
    if (respons.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
        dispatch(isFetching(false));
    }
}

export const getCaptchaThunk = () => async (dispatch: any) => {
    let response = await securityApi.getCaptchaUrl();
    dispatch(getCaptchaUrl(response.data.url))
}

export default authReducer;