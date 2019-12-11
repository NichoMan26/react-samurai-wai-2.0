import React from 'react';

import cls from './NewPost.module.css'
import {updateNewPostActionCreator, addPostActionCreator} from './../../../../redux/state'

const NewPost = (props) => {
    let newPostEl = React.createRef();
    let addpost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () =>{
        props.dispatch(updateNewPostActionCreator(newPostEl.current.value))
    }
    
    return(
        <div className={cls.wrapper}>
            <textarea onChange={onPostChange} value={props.newPostText} ref={newPostEl} className={cls.textarea} name="" ></textarea>
            <button onClick={addpost} className={cls.button}>Add post</button>
        </div>
    )
}
export default NewPost;