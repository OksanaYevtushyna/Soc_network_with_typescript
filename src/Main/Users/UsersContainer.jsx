import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { showMore, setCurrentPage, getUsersThunk, changePageThunk, unfollowThunk, followThunk } from '../../redux/usersReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class UserAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage);
    }

    onPageChange = (pageNumber) => {
        this.props.changePageThunk(pageNumber, this.props.pageSize);
    }

    render() {
        return <Users {...this.props} onPageChange={this.onPageChange} />
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.usersReducer.usersData,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isLoading: state.usersReducer.isLoading,
        followingInProgress: state.usersReducer.followingInProgress,
    }
}

let UsersContainer = compose(
    connect(mapStateToProps, { showMore, setCurrentPage, getUsersThunk, changePageThunk, unfollowThunk, followThunk }),
    withAuthRedirect
)(UserAPIContainer)


//let AuthRedirectComponent = withAuthRedirect(UserAPIContainer)

//const UsersContainer = connect(mapStateToProps, { showMore, setCurrentPage, getUsersThunk, changePageThunk, unfollowThunk, followThunk })(AuthRedirectComponent);


export default UsersContainer;





/*let mapDispatchToProps = (dispatch) => {
    return {
        showMore: () => dispatch(ShowMoreActionCreator()),
        followStatus: (userId) => dispatch(ChangeFollowStatusAC(userId)),
        unfollowStatus: (userId) => dispatch(ChangeUnfollowStatusAC(userId)),
        setUsers: (users) => dispatch(SetUsersAC(users)),
        setUsersCount: (userCount) => dispatch(setTotalUserCountAC(userCount)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
        isFetching: (fetching) => dispatch(SetFetchingAC(fetching))
    }
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserAPIContainer);


render() {
        return <Users state={this.props.state}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            showMore={this.props.showMore}
            onPageChange={this.onPageChange}
            isLoading={this.props.isLoading}
            followingInProgress={this.props.followingInProgress}
            unfollowThunk={this.props.unfollowThunk}
            followThunk={this.props.followThunk} />
        }*/