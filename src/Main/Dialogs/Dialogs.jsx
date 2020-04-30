import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

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
            <img src="https://www.dhresource.com/0x0/f2/albu/g2/M01/96/84/rBVaG1oqYkuAFdvJAADFP_3Xees277.jpg" alt="" /><span>{props.dialog}</span>
        </div>
    )
};

const Dialogs = (props) => {
    let dialogElement = props.state.dialogsData.map(dialog => <Person name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messageElement = props.state.messagesData.map(message => <Dialog dialog={message.message} key={message.id} />);

    let newMessage = React.createRef();
    let sentMessage = () => {
        let message = newMessage.current.value;
        props.sentMessage(message);
        newMessage.current.value = '';
    }

    let createMessage = (createdMessage) => {
        let message = newMessage.current.value;
        createdMessage = message;
        props.createMessage(createdMessage);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.persons}>
                {dialogElement}
            </div>
            <div className={styles.dialogItems}>
                {messageElement}
            </div>
            <div className={styles.sentMessage}>
                <textarea cols="70" rows="5" ref={newMessage} onChange={createMessage}></textarea>
                <button onClick={sentMessage}>Sent message</button>
            </div>
        </div>
    )
}


export default Dialogs;