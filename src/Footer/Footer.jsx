import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.contacts}>
                <ul className={styles.contacts_list}>
                    <li>Contacts:</li>
                    <li>city: Lviv</li>
                    <li>str: Shevchenka</li>
                    <li>tel: 098-111-22-33</li>
                </ul>
            </div>
            <p> Made in Ukraine <br />Copyright 2020</p>
        </div>
    )
}

export default Footer