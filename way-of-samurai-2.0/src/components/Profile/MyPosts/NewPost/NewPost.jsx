import React from 'react';
import {Field, reduxForm} from 'redux-form'

import cls from './NewPost.module.css'

const NewPost = (props) => {
    let addNewPost = (values) => {
        props.addNewPost(values.newPostText)
    }
    
    return(
        <MyPostFormRedux onSubmit={addNewPost}/>
    )
}
const MyPostForm= (props) => {
return (
    <form onSubmit={props.handleSubmit} className={cls.wrapper}>
        <Field component={'textarea'} name='newPostText' className={cls.textarea} />
        <button className={cls.button}>Add post</button>
    </form>)
}
const MyPostFormRedux = reduxForm({form:'newPostForm'})(MyPostForm)
export default NewPost;