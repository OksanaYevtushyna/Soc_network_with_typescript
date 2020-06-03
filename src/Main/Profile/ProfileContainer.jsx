import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import * as axios from 'axios';


class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(respons => {
            this.props.setUserProfile(respons.data);
        })
    }

    render() {
        return <Profile data={this.props.userProfile} />
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profileReducer.userProfile
    }
}
export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);