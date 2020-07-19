import { authUserThunk } from './auth-reducer';


const SET_INITIALIZED = 'SET_INITIALIZED';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
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


export const setInitializedData = () => ({ type: SET_INITIALIZED });



export const initializeThunk = () => async (dispatch) => {
    await dispatch(authUserThunk())
    dispatch(setInitializedData());
}



export default appReducer;