import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElement = props.state.postsData.map(post => <Post message={post.message} likeCount={post.likeCount} srcImage={post.srcImage} key={post.id} />)

    let postNewMessage = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let enterNewPost = () => {
        let post = postNewMessage.current.value;
        props.enterNewPost(post);
    }

    return (
        <div className={styles.postsBlock}>
            <div className={styles.addPost}>
                <div><textarea cols="40" rows="5" ref={postNewMessage} value={props.state.newPostData} onChange={enterNewPost}></textarea></div>
                <div><button onClick={addPost}>Add Post</button></div>
            </div>
            <div className={styles.myPost}>
                <h3>My Posts</h3>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;