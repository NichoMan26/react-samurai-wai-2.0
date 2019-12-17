import React from 'react';

import cls from './NewPost.module.css'

const NewPost = (props) => {
    let addPost = () => {
        props.addPost()
    }
    let onPostChange = (event) =>{
        props.updateNewPostText(event.target.value)
    }
    
    return(
        <div className={cls.wrapper}>
            <textarea onChange={onPostChange} value={props.newPostText} className={cls.textarea} name="" ></textarea>
            <button onClick={addPost} className={cls.button}>Add post</button>
        </div>
    )
}
export default NewPost;