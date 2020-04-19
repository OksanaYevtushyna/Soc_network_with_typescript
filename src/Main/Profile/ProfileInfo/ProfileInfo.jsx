import React from 'react';
import styles from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={styles.profile_info}>
            <img src="http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg" alt="" />
            <div className={styles.personal_info}>
                <span>Date of birth: </span>
                <span>City: </span>
                <span>Education: </span>
                <span>My pets: </span>
            </div>
        </div>
    )
}

export default ProfileInfo;