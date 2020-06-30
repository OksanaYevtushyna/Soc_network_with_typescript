import React from 'react';
import styles from './Users.module.css';
import Preloader from '../../common/preloader/Preloader';
import { NavLink } from 'react-router-dom';

class UserInfo extends React.Component {
    render() {
        return (
            <div className={styles.userInfo}>
                <div className={styles.photo}>
                    <NavLink to={'/profile/' + this.props.id}>
                        <img src={this.props.img ? this.props.img : 'https://avatars.mds.yandex.net/get-pdb/1543345/ab20d2c7-57a4-485d-9521-ef418c0aa110/s600'} alt="user_image" />
                    </NavLink>
                    {this.props.followed ?
                        <button className={styles.follow} disabled={this.props.followingInProgress.some(id => id === this.props.id)} onClick={() => {
                            this.props.unfollowThunk(this.props.id)
                        }}>Unfollow</button> :

                        <button className={styles.follow} disabled={this.props.followingInProgress.some(id => id === this.props.id)} onClick={() => {
                            this.props.followThunk(this.props.id)
                        }}>Follow</button>}
                </div>
                <div className={styles.info}>
                    <span>{this.props.name}</span><span>{this.props.city}</span>
                    <p>{this.props.status}</p>
                </div>
            </div >
        )
    }
}

class User extends React.Component {
    render() {
        let usersElement = this.props.state.map(user => <UserInfo key={user.id} name={user.name} img={user.photos.small} city={user.city} status={user.status} id={user.id}
            followed={user.followed} {...this.props} />);
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        let showPages = pages.map((page, index) => <span onClick={() => { this.props.onPageChange(page) }} key={index} className={this.props.currentPage === page ? styles.selectedPage : styles.pageNumber} >{page}</span>)
        return (
            <div className={styles.users}>
                <h3>Users</h3>
                {showPages}
                {usersElement}
                <button onClick={this.props.showMore} className={styles.show}>Show More</button>
            </div>)
    }
}

class Users extends React.Component {
    render() {
        return (
            <div className={styles.users}>
                {this.props.isLoading ? <Preloader /> : <User {...this.props} />}
            </div>)
    }
}


export default Users;

/*const UserInfo = (props) => {
    let followStatus = () => props.followStatus(props.id);
    let unfollowStatus = () => props.unfollowStatus(props.id);

    return (
        <div className={styles.userInfo}>
            <div className={styles.photo}>
                <img src={props.img ? props.img : 'https://avatars.mds.yandex.net/get-pdb/1543345/ab20d2c7-57a4-485d-9521-ef418c0aa110/s600'} alt="user_image" />
                <button className={styles.follow} onClick={props.followed ? unfollowStatus : followStatus}>{props.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <div className={styles.info}>
                <span>{props.name}</span><span>{props.city}</span>
                <p>{props.status}</p>
            </div>
        </div>
    )
}

const Users = (props) => {
    if (props.state.length <= 10) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(respons => {
            props.setUsers(respons.data.items);
        })
    }

    let usersElement = props.state.map(user => <UserInfo key={props.id} name={user.name} img={user.img} city={user.city} status={user.status}
        followed={user.followed} id={user.id} followStatus={props.followStatus} unfollowStatus={props.unfollowStatus} />);

    let showMore = () => {
        props.showMore();
    }

    return (
        <div className={styles.users}>
            <h3>Users</h3>
            {usersElement}
            <button onClick={showMore} className={styles.show}>Show More</button>
        </div>
    )
}*/