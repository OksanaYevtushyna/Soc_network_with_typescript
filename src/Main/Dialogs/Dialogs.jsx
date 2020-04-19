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

const Dialog = (props) => <div className={styles.message}>{props.dialog}</div>;

const Dialogs = (props) => {
    let dialogElement = props.dialogsData.map(dialog => <Person name={dialog.name} id={dialog.id} />);
    let messageElement = props.messagesData.map(message => <Dialog dialog={message.message} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.persons}>
                {dialogElement}
            </div>

            <div className={styles.dialogItems}>
                {messageElement}
            </div>
        </div>
    )
}


export default Dialogs;