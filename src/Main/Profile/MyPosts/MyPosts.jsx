import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../validators/formValidators/fromValidators';
import { InputElement } from '../../../common/FormsControls/Forms';

let maxLength30 = maxLengthCreator(30)
const AddPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[requiredField, maxLength30]} component={InputElement} name={'post'} label='textarea'></Field></div>
            <div><button type='submit'>Add Post</button></div>
        </form>
    )
}

const ReduxPostForm = reduxForm({ form: 'post' })(AddPost)

const MyPosts = (props) => {
    let postsElement = props.state.postsData.map(post => <Post message={post.message} likeCount={post.likeCount} srcImage={post.srcImage} key={post.id} />)

    let onSubmit = (newPostData) => {
        props.addPost(newPostData.post);
    }

    return (
        <div className={styles.postsBlock}>
            <div className={styles.addPost}>
                <ReduxPostForm onSubmit={onSubmit} />
            </div>
            <div className={styles.myPost}>
                <h3>My Posts</h3>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;