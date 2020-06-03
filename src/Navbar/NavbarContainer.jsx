import React from 'react';
import Navbar from './Navbar';



const NavbarContainer = (props) => {
    let state = props.store.getState().navbarReducer
    return (
        <Navbar state={state} />
    )
}

export default NavbarContainer