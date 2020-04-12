import React from 'react';
import contentStyle from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
        <div className={contentStyle.main}>
            <div className={contentStyle.profile_info}>

            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;