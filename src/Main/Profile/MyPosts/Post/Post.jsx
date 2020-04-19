import React from 'react';
import styles from './Post.module.css';


const Post = (props) => {
    return (
        <div className={styles.post}>
            <img src="https://www.biletik.aero/upload/resize_cache/medialibrary/807/compressed/807f262b60da392f1e09aa6d33f20a9b.jpg" alt="" />
            {props.message}
            <p>likes: {props.likeCount}</p>
        </div>
    )
}

export default Post;