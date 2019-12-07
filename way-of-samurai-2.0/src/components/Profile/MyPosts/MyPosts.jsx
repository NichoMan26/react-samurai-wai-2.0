import React from 'react';

import cls from './MyPosts.module.css'
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';
const MyPosts = () => {
    return(
        <div className={cls.wrapper}>
            <NewPost/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
    )
}
export default MyPosts;