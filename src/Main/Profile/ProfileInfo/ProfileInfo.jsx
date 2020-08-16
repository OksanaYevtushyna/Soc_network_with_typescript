import React, { useState } from 'react';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import unnamedUserPhoto from '../../../accets/images/unnamedUserPhoto.png';
import ReduxContactFormData from './ContactsDataForm';


const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    let onSubmit = (contactData) => {
        props.updateContactDataThunk(contactData).then(() => {
            setEditMode(false);
        }).catch(err => console.log(err));
    }

    let changeUserPhoto = (e) => {
        if (e.target.files.length) {
            props.changeUserProfilePhotoThunk(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={styles.profile_info}>
                <div>
                    <img src={props.data.photos.large ? props.data.photos.large : unnamedUserPhoto} alt="" className={styles.avatarPhoto} />
                    {props.isOwner && <input type="file" onChange={changeUserPhoto} />}
                </div>
                {editMode ? <ReduxContactFormData initialValues={props.data} data={props.data} onSubmit={onSubmit} />
                    : <ContactsData data={props.data} isOwner={props.isOwner} toEditMode={() => { setEditMode(true) }} />}
            </div>
            <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk} />
        </div>
    )
}


export const Contact = ({ contactTitle, contactValue }) => {
    return (
        <p className={styles.contactInfo}><i>{contactTitle}</i>: <span>{contactValue ? contactValue : '-----'}</span></p>
    )
}

const ContactsData = ({ data, isOwner, toEditMode }) => {
    let [visibleMode, setVisibleMode] = useState(false);
    let setVisibility = () => {
        if (visibleMode) setVisibleMode(false)
        else setVisibleMode(true)
    }
    return (
        <div className={styles.personal_info}>
            {isOwner && <div><button onClick={toEditMode}>edit</button></div>}
            <p><b>Full name:</b> {data.fullName}</p>
            <p><b>About me:</b> {data.aboutMe}</p>
            <p><b>Looking for a job:</b> {data.lookingForAJob ? 'yes' : 'no'}</p>
            <p><b>My skills:</b> {data.lookingForAJobDescription}</p>
            <div className={styles.contacts}> <b onClick={setVisibility}>Contacts:</b>
                {visibleMode && <div>{Object.keys(data.contacts).map(contact => <Contact key={contact} contactTitle={contact} contactValue={data.contacts[contact]} />)}</div>}
            </div>
        </div>
    )
}


export default ProfileInfo;



/* changeInputHandler = (event) => {
    this.setState(prev => ({
        ...prev, ...{
            [event.target.name]: event.target.value
        }
    }))
}
*/
