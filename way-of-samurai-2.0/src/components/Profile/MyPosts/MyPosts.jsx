import React from 'react';

import cls from './MyPosts.module.css'
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';
const MyPosts = React.memo((props) => {
    console.log('RENDER');
    let myPosts = props.myPosts.map((el, idx) => {
        return <Post key={idx} message={el.text}/>
    })
    
    return(
        
        <div className={cls.wrapper}>
            <NewPost addNewPost={props.addNewPost}/>
            {myPosts}
        </div>
    )
})
export default MyPosts;