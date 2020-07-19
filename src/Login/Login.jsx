import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { InputElement } from '../common/FormsControls/Forms';
import { requiredField } from '../validators/formValidators/fromValidators';
import { Redirect } from 'react-router-dom';
import styles from '../common/FormsControls/Forms.module.css';



let LoginForm = (props) => {

    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field label='input' type='text' placeholder='Login' component={InputElement} name={'login'} validate={[requiredField]} />
            </div>
            <div>
                <Field label='input' type="password" placeholder='Password' component={InputElement} name={'password'} validate={[requiredField]} />
            </div>
            <div>
                <Field label='input' type="checkbox" component={InputElement} name={'rememberMe'} />remember me
            </div>
            {props.captcha && <div><img src={props.captcha} alt="" />
                <Field label='input' type="text" placeholder='Symbols' component={InputElement} name={'captcha'} validate={[requiredField]} /></div>}
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    )
}

let ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

let Login = (props) => {
    let onSubmit = (formData) => {
        props.loggingAuthThunk(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) return <Redirect to={'/profile'} />
    return (
        <div>
            <h2>Please verify yourself</h2>
            <ReduxLoginForm onSubmit={onSubmit} captcha={props.captcha} getCaptchaThunk={props.getCaptchaThunk} />
        </div>
    )
}



export default Login