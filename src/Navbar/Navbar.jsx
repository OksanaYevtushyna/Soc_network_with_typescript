import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.menu}><NavLink to='/profile' activeClassName={styles.active}>Home</NavLink></li>
                <li className={styles.menu}><NavLink to='/dialogs' activeClassName={styles.active}>Messages</NavLink></li>
                <li className={styles.menu}><NavLink to='/news' activeClassName={styles.active}>News</NavLink></li>
                <li className={styles.menu}><NavLink to='/music' activeClassName={styles.active}>Music</NavLink></li>
                <li className={styles.menu}><NavLink to='/notification' activeClassName={styles.active}>Notification</NavLink></li>
                <li className={styles.menu}><NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar