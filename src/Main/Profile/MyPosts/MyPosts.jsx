import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElement = props.postsData.map(post => <Post message={post.message} likeCount={post.likeCount} />)

    return (
        <div className={styles.postsBlock}>
            <h3>My Posts</h3>
            <div className={styles.addPost}>
                <div><textarea name="" cols="40" rows="5"></textarea></div>
                <div><button>Add Post</button></div>
            </div>
            <div className={styles.myPost}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;