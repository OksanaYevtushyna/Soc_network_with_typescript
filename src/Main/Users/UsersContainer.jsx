import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
    showMore,
    followStatus,
    unfollowStatus,
    setUsers,
    setUsersCount,
    setCurrentPage,
    isFetching
} from '../../redux/usersReducer';
import * as axios from 'axios';

class UserAPIContainer extends React.Component {
    componentDidMount() {
        this.props.isFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(respons => {
            this.props.setUsers(respons.data.items);
            this.props.setUsersCount(respons.data.totalCount);
            this.props.isFetching(false);
        })
    }

    onPageChange = (pageNumber) => {
        this.props.isFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(respons => {
            this.props.setUsers(respons.data.items);
            this.props.isFetching(false);
        })
    }

    render() {
        return <Users state={this.props.state}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            followStatus={this.props.followStatus}
            unfollowStatus={this.props.unfollowStatus}
            showMore={this.props.showMore}
            onPageChange={this.onPageChange}
            isLoading={this.props.isLoading} />
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.userReducer.usersData,
        pageSize: state.userReducer.pageSize,
        totalUsersCount: state.userReducer.totalUsersCount,
        currentPage: state.userReducer.currentPage,
        isLoading: state.userReducer.isLoading
    }
}
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
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserAPIContainer);*/


const UsersContainer = connect(mapStateToProps, { showMore, followStatus, unfollowStatus, setUsers, setUsersCount, setCurrentPage, isFetching })(UserAPIContainer);


export default UsersContainer;