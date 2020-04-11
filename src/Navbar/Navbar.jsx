import React from 'react';
import navbarStyle from './Navbar.module.css';


const Navbar = () => {
    return (
        <div className={navbarStyle.navbar}>
            <ul className={navbarStyle.list}>
                <li className={navbarStyle.menu}>Home</li>
                <li className={navbarStyle.menu}>Messages</li>
                <li className={navbarStyle.menu}>News</li>
                <li className={navbarStyle.menu}>Music</li>
                <li className={navbarStyle.menu}>Notification</li>
                <li className={navbarStyle.menu}>Settings</li>
            </ul>
        </div>
    )
}

export default Navbar