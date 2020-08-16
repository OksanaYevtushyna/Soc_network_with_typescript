import { authUserThunk } from './auth-reducer';


const SET_INITIALIZED = 'SET_INITIALIZED';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type InitializedDataActionType = {
    type: typeof SET_INITIALIZED
}

export const setInitializedData = (): InitializedDataActionType => ({ type: SET_INITIALIZED });

export const initializeThunk = () => async (dispatch: any) => {
    await dispatch(authUserThunk())
    dispatch(setInitializedData());
}



export default appReducer;