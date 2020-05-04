import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { sentMessageActionCreator, createMessageActionCreator } from '../../state/state';

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

const Dialogs = (props) => {
    let dialogElement = props.state.dialogsData.map(dialog => <Person name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messageElement = props.state.messagesData.map(message => <Dialog dialog={message.message} key={message.id} src={message.src} />);

    let sentMessage = () => {
        props.dispatch(sentMessageActionCreator());
    }

    let createMessage = (e) => {
        let message = e.target.value;
        props.dispatch(createMessageActionCreator(message));
    }

    return (
        <div>
            <div className={styles.sentMessage}>
                <div><textarea placeholder='Enter your message here' cols="70" rows="5" onChange={createMessage} value={props.state.initialMessage}></textarea></div>
                <div><button onClick={sentMessage}>Sent message</button></div>
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