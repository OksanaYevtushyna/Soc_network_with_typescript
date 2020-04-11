import React from 'react';
import contentStyle from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';


const Content = () => {
    return (
        <div className={contentStyle.main}>
            <div className={contentStyle.profile_info}>

            </div>
            <MyPosts />
        </div>
    )
}

export default Content