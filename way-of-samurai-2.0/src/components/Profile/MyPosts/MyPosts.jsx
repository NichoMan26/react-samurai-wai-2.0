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
            <NewPost dispatch={props.dispatch}
                    newPostText={props.newPostText}/>
            {myPosts}
        </div>
    )
}
export default MyPosts;