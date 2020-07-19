import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { InputElement } from '../../common/FormsControls/Forms';
import { requiredField, maxLengthCreator } from '../../validators/formValidators/fromValidators';


let maxLength50 = maxLengthCreator(50)
const Person = (props) => {
    let path = '/dialogs/';
    return (
        <div className={styles.person}>
            <NavLink to={path + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Dialog = (props) => {
    return (
        <div className={styles.message}>
            <img src={props.src} alt="" /><span>{props.dialog}</span>
        </div>
    )
};

const Message = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'dialog'} placeholder='Enter your message here' component={InputElement} validate={[requiredField, maxLength50]} label='textarea'></Field></div>
            <div><button>Sent message</button></div>
        </form>
    )
}

const ReduxNewPostForm = reduxForm({ form: 'newPost' })(Message)

const Dialogs = (props) => {
    let dialogElement = props.state.dialogsData.map(dialog => <Person name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messageElement = props.state.messagesData.map(message => <Dialog dialog={message.message} key={message.id} src={message.src} />);

    let onSubmit = (dialogData) => {
        props.sentMessage(dialogData.dialog)
    }
    return (
        <div>
            <div className={styles.sentMessage}>
                <ReduxNewPostForm onSubmit={onSubmit} />
            </div>
            <div className={styles.dialogs}>
                <div className={styles.persons}>
                    {dialogElement}
                </div>
                <div className={styles.dialogItems}>
                    {messageElement}
                </div>
            </div>
        </div>
    )
}


export default Dialogs;