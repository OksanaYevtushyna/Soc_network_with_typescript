import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../../common/preloader/Preloader';

const UserProfile = (props) => {
    return (
        <div>
            <img src={props.data.photos.large} alt="" />
            <span>{props.data.aboutMe}</span>
        </div>
    )
}

const Profile = (props) => {
    if (!props.data) {
        return <Preloader />
    } else {
        return (
            <div className={styles.main}>
                <UserProfile data={props.data} />
                <ProfileInfo />
                <MyPostsContainer store={props.store} />
            </div>
        )
    }
}

export default Profile;