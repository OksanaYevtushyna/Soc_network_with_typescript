import React from 'react';
import styles from './ProfileInfo.module.css';
import { InputElement } from '../../../common/FormsControls/Forms';
import { reduxForm, Field } from 'redux-form';



const ContactDataForm = ({ data, handleSubmit, error }) => {
    return (
        <form className={styles.personal_info} onSubmit={handleSubmit}>
            <div><button type='submit'>save</button></div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <p><b>Full name:</b> <Field label='input' type='text' placeholder='Full name' component={InputElement} name={'fullName'} /></p>
            <p><b>About me:</b> <Field label='input' type='text' placeholder='about me' component={InputElement} name={'aboutMe'} /></p>
            <p><b>Looking for a job:</b> <Field label='input' type='checkbox' placeholder='looking for a job' component={InputElement} name={'lookingForAJob'} /></p>
            <p><b>My skills:</b> <Field label='textarea' type='text' placeholder='My skills' component={InputElement} name={'lookingForAJobDescription'} /></p>
            <div className={styles.contacts}> <b>Contacts:</b>
                {Object.keys(data.contacts).map(contact => <div>
                    <i>{contact}: </i> <Field label='input' type='text' placeholder={contact} component={InputElement} name={'contacts.' + contact} />
                </div>)}
            </div>
        </form>
    )
}


let ReduxContactFormData = reduxForm({
    form: 'contact'
})(ContactDataForm)

export default ReduxContactFormData