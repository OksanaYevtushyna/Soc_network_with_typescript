import React from 'react';
import './Post.module.css';


const Post = (props) => {
    return (
        <div>
            <p>{props.message}</p>
        </div>
    )
}

export default Post;