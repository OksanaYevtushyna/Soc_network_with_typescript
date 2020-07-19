import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logoutThunk } from '../redux/auth-reducer';


class HeaderContainer extends React.Component {
    componentDidMount() {
        //this.props.authUserThunk();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.login,
        email: state.authReducer.email,
        userId: state.authReducer.userId,
    }
};

export default connect(mapStateToProps, { logoutThunk })(HeaderContainer)