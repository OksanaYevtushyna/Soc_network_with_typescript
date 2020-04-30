import React from 'react';
import styles from './Post.module.css';


const Post = (props) => {
    return (
        <div className={styles.post}>
            <img src={props.srcImage} alt="" />
            {props.message}
            <p>likes: {props.likeCount}</p>
        </div>
    )
}

export default Post;