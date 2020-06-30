//import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';



/*const NavbarContainer = (props) => {
    let state = props.store.getState().navbarReducer
    return (
        <Navbar state={state} />
    )
}*/

let mapStateToProps = (state) => {
    return {
        friendsData: state.navbarReducer.friendsData,
        navbarListData: state.navbarReducer.navbarListData
    }
}

const NavbarContainer = connect(mapStateToProps, null)(Navbar);

export default NavbarContainer