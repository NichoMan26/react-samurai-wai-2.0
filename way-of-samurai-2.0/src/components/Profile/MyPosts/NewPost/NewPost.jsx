import React from 'react';

import cls from './NewPost.module.css'
const NewPost = () => {
    return(
        <div className={cls.wrapper}>
            <textarea className={cls.textarea} name="" ></textarea>
            <button className={cls.button}>Add post</button>
        </div>
    )
}
export default NewPost;