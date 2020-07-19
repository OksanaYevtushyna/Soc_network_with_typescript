import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../../common/preloader/Preloader';


const Profile = (props) => {
    if (!props.data) {
        return <Preloader />
    } else {
        return (
            <div className={styles.main}>
                <ProfileInfo status={props.status} updateStatusThunk={props.updateStatusThunk} data={props.data} userId={props.userId}
                    changeUserProfilePhotoThunk={props.changeUserProfilePhotoThunk} isOwner={props.isOwner} updateContactDataThunk={props.updateContactDataThunk} />
                <MyPostsContainer store={props.store} />
            </div>
        )
    }
}

export default Profile;