import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElement = props.postsData.map(post => <Post message={post.message} likeCount={post.likeCount} srcImage={post.srcImage} key={post.id} />)

    let postNewMessage = React.createRef();

    let addPost = () => {
        let post = postNewMessage.current.value;
        props.addPost(post);
    }

    let enterNewPost = (updatePost) => {
        let post = postNewMessage.current.value;
        updatePost = post;
        props.enterNewPost(updatePost);
    }


    return (
        <div className={styles.postsBlock}>
            <h3>My Posts</h3>
            <div className={styles.addPost}>
                <div><textarea cols="40" rows="5" ref={postNewMessage} value={props.newPostData} onChange={enterNewPost}></textarea></div>
                <div><button onClick={addPost}>Add Post</button></div>
            </div>
            <div className={styles.myPost}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;