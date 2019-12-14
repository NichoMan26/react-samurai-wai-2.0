import React from 'react';

import cls from './MyPosts.module.css'
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';
const MyPosts = (props) => {
    console.log(props)
    let myPosts = props.myPosts.map((el, idx) => {
        return <Post key={idx} message={el.text}/>
    })
    return(
        <div className={cls.wrapper}>
            <NewPost updateNewPostText={props.updateNewPostText} 
                    addPost={props.addPost}
                    newPostText={props.newPostText}
                    />
            {myPosts}
        </div>
    )
}
export default MyPosts;