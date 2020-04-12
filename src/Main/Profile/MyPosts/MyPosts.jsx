import React from 'react';
import './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            <Post message='Hello world!' />
            <Post message='Life is great!' />
            <Post message='Props is done.' />
        </div>
    )
}

export default MyPosts;