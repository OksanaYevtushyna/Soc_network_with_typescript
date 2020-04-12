import React from 'react';
import navbarStyle from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className={navbarStyle.navbar}>
            <ul className={navbarStyle.list}>
                <li className={navbarStyle.menu}><NavLink to='/profile' activeClassName={navbarStyle.active}>Home</NavLink></li>
                <li className={navbarStyle.menu}><NavLink to='/dialogs' activeClassName={navbarStyle.active}>Messages</NavLink></li>
                <li className={navbarStyle.menu}><NavLink to='/news' activeClassName={navbarStyle.active}>News</NavLink></li>
                <li className={navbarStyle.menu}><NavLink to='/music' activeClassName={navbarStyle.active}>Music</NavLink></li>
                <li className={navbarStyle.menu}><NavLink to='/notification' activeClassName={navbarStyle.active}>Notification</NavLink></li>
                <li className={navbarStyle.menu}><NavLink to='/settings' activeClassName={navbarStyle.active}>Settings</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar