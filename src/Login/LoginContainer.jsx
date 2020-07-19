import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { loggingAuthThunk, getCaptchaThunk } from '../redux/auth-reducer';



let LoginContainer = (props) => {
    return (
        <Login loggingAuthThunk={props.loggingAuthThunk} isAuth={props.isAuth} getCaptchaThunk={props.getCaptchaThunk} captcha={props.captcha} />
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        captcha: state.authReducer.captcha
    }
}

export default connect(mapStateToProps, { loggingAuthThunk, getCaptchaThunk })(LoginContainer) 