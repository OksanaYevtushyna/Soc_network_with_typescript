import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const FriendsBlock = (props) => {
    return (
        <div className={styles.friends}>
            <img src={props.src} alt="" />
            <span>{props.name}</span>
        </div>
    )
}

const Navbar = (props) => {
    let friendElement = props.state.friendsData.map(friend => <FriendsBlock src={friend.src} name={friend.name} key={friend.id} />);

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
            <div>
                <h3>Friends</h3>
                <div className={styles.blockFriend}>
                    {friendElement}
                </div>
            </div>
        </div>
    )
}

export default Navbar