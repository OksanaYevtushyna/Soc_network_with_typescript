import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <div className={styles.main}>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData} newPostData={props.state.newPostData} dispatch={props.dispatch} /*addPost={props.addPost} enterNewPost={props.enterNewPost}*/ />
        </div>
    )
}

export default Profile;