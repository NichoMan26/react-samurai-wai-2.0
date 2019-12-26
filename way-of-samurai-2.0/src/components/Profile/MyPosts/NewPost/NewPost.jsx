import React from 'react';
import { Field, reduxForm } from 'redux-form';
import cls from './NewPost.module.css';
import {Textarea} from './../../../Common/FormsControls/FormsControls'
import {required, maxLengthCreator} from './../../../../utils/validators/validators'

const maxLength10 = maxLengthCreator(10)
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
        <Field component={Textarea} placeholder='Post' name='newPostText' 
        validate={[required, maxLength10]}/>
        <button className={cls.button}>Add post</button>
    </form>)
}
const MyPostFormRedux = reduxForm({form:'newPostForm'})(MyPostForm)
export default NewPost;