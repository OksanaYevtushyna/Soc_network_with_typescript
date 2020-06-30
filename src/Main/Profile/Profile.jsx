import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../../common/preloader/Preloader';
import unnamedUserPhoto from '../../accets/images/unnamedUserPhoto.png';


const UserProfile = (props) => {
    if (+props.userId === props.data.userId) {
        return (
            <div>
                <img src={props.data.photos.large ? props.data.photos.large : unnamedUserPhoto} alt="" />
                <span>{props.data.aboutMe}</span>
                <p>{props.data.fullName}</p>
            </div>
        )
    } else {
        return <p>User Data is loading</p>
    }
}

const Profile = (props) => {
    if (!props.data) {
        return <Preloader />
    } else if (!props.userId) {
        return (
            <div className={styles.main}>
                <ProfileInfo />
                <MyPostsContainer store={props.store} />
            </div>
        )
    } else {
        return (
            <div className={styles.main}>
                <UserProfile data={props.data} userId={props.userId} />
                <ProfileInfo />
                <MyPostsContainer store={props.store} />
            </div>
        )
    }
}

export default Profile;