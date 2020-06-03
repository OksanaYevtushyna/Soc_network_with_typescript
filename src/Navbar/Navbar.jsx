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
    let navList = props.state.navbarListData.map(listItem => <li className={styles.menu} key={listItem.id}><NavLink to={listItem.linkPath} activeClassName={styles.active}>{listItem.linkName}</NavLink></li>);

    return (
        <div className={styles.navbar}>
            <ul className={styles.list}>
                {navList}
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