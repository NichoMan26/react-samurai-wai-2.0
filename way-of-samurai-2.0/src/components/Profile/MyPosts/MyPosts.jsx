import React from 'react';

import cls from './MyPosts.module.css'
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';
const MyPosts = (props) => {
    let myPosts = props.myPosts.map((el) => {
        return <Post message={el.text}/>
    })
    return(
        <div className={cls.wrapper}>
            <NewPost addPost={props.addPost}
                    newPostText={props.newPostText}
                    updateNewPostText={props.updateNewPostText}/>
            {myPosts}
        </div>
    )
}
export default MyPosts;