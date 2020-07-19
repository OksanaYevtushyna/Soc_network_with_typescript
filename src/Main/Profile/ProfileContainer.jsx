import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
    getUserIdThunk,
    getUserStatusThunk,
    updateStatusThunk,
    changeUserProfilePhotoThunk,
    updateContactDataThunk
} from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/users');
            }
        }
        this.props.getUserIdThunk(userId);
        this.props.getUserStatusThunk(userId)
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile data={this.props.userProfile} isAuth={this.props.isAuth} userId={this.props.authorizedUserId}
            status={this.props.status} updateStatusThunk={this.props.updateStatusThunk} isOwner={!this.props.match.params.userId}
            changeUserProfilePhotoThunk={this.props.changeUserProfilePhotoThunk} updateContactDataThunk={this.props.updateContactDataThunk} />
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profileReducer.userProfile,
        status: state.profileReducer.status,
        authorizedUserId: state.authReducer.userId,
        isAuth: state.authReducer.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { getUserIdThunk, getUserStatusThunk, updateStatusThunk, changeUserProfilePhotoThunk, updateContactDataThunk }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)






/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithUrlDataProfileContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserIdThunk })(WithUrlDataProfileContainer);*/