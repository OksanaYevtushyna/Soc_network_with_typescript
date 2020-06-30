import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserIdThunk } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
//import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId = 2 }
        this.props.getUserIdThunk(userId);
    }

    render() {
        return <Profile data={this.props.userProfile} userId={this.props.match.params.userId} isAuth={this.props.isAuth} />
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profileReducer.userProfile,
    }
}

export default compose(
    connect(mapStateToProps, { getUserIdThunk }),
    withRouter
    //withAuthRedirect
)(ProfileContainer)

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithUrlDataProfileContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserIdThunk })(WithUrlDataProfileContainer);*/